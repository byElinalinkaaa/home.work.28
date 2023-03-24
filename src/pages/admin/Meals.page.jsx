import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { deleteMeal, getOneMeal, mealsAdmin, updateMeal } from '../../store/admin-meals/adminMeals.thunk'
import { AdminModal } from './modal/AdminModal'
import MuiButton from '../../components/UI/MuiButton'



export const Meals = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState()
    const [searchParams, setSearchparams] = useSearchParams()
    const [change, setChange] = useState(false)
    const [backdrop, setBackdrop] = useState(false)
    const { meals, newMeal } = useSelector((state) => {
        return state.mealsAdmin
    } )
    const openModalHandler = () => {
        searchParams.set('modal', 'addNewMeal')
        setSearchparams(searchParams)
        setBackdrop(true)
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(mealsAdmin())
    }, [dispatch])

    const closeModalHAndler = () => {
        searchParams.delete('modal')
        setSearchparams(searchParams)
        setChange(false)
        setBackdrop(false)
    }
    const deleteMealHandler = (id) => {
        dispatch(deleteMeal(id))
    }
    const editMealHandler = (id) => {
        dispatch(getOneMeal(id))
        setTitle(newMeal.title)
        setDescription(newMeal.description)
        setPrice(newMeal.price)
        openModalHandler()
        setChange(true)
    }
    const saveUpdateMealHandler = () => {
        const data = {
            title,
            description,
            price: +price,
            // eslint-disable-next-line no-underscore-dangle
            id: newMeal._id,
        }
        dispatch(updateMeal(data))
        setChange(false)
        closeModalHAndler()
    }
    return (
        < >
            <Container style={backdrop ? {filter: 'blur(5px)'} : {filter: 'grayscale(0)'}}>
                <Title>Meals:</Title>
                <StyledButton onClick={openModalHandler}>
                    Add Meals
                </StyledButton>
            </Container>
            <div style={backdrop ? {filter: 'blur(5px)'} : {filter: 'grayscale(0)'}}>
                <MealList>
                    {meals.map((item) => {
                        return (
                            // eslint-disable-next-line no-underscore-dangle, react/no-array-index-key
                            <ListItem key={item._id}>
                                <div>
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                </div>
                                <div>
                                    <span>$ {item.price}</span>

                                    <MuiButton variant='outlined'
                                        onClick={() =>
                                            // eslint-disable-next-line no-underscore-dangle
                                            editMealHandler(item._id)
                                        }
                                    >
                                        Edit
                                    </MuiButton>

                                    <MuiButton
                                        onClick={() =>
                                            // eslint-disable-next-line no-underscore-dangle
                                            deleteMealHandler(item._id)
                                        }
                                    >
                                        Delete
                                    </MuiButton>
                                </div>
                            </ListItem>
                        )
                    })}
                </MealList>
            </div>

            <AdminModal
                open={openModalHandler}
                closeModalHandler={closeModalHAndler}
                searchParams={searchParams}
                title={title}
                description={description}
                price={price}
                setTitle={setTitle}
                setDescription={setDescription}
                setPrice={setPrice}
                change={change}
                saveUpdateMealHandler={saveUpdateMealHandler}
            />
        </>
    )
}

export default Meals

const Container = styled('div')`
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: fit-content;
`

const StyledButton = styled(Button)`
    padding: 10px 20px;
    background-color: #0cbc0c;
    color: #fff;
    :hover {
        background-color: green;
    }
`
const Title = styled('h1')`
    color: #ffffff;
`
const MealList = styled('ul')`
    width: 70%;
    margin: 0 auto;
    margin-top: 1rem;
    background-color: white;
    border-radius: 20px;
    list-style: none;
    margin-bottom: 2rem;
`
const ListItem = styled('li')`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px;
    justify-content: space-between;
    border-bottom: 1px solid;
    h2 {
        font-size: 20px;
    }
    p {
        max-width: 300px;
    }
    span {
        font-size: 20px;
        font-weight: 700;
        margin-right: 40px;
    }
`

