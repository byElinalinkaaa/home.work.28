import * as React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import {format} from 'date-fns'
import { getAllOrders } from '../../store/order/order.thunk'

export default function Orders() {
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllOrders())
    }, [])

    const meals = useSelector((state) => state.orders.meals)

    const date = (day) => {
        const formatDate = format(new Date(day), 'dd MMM yyyy , hh:mm:ss a')
        return formatDate
    }

    const handleChangePage = (newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    return (
        <Paper
            sx={{
                width: '85%',
                overflow: 'hidden',
                margin: '0 auto',
                marginTop: '2rem',
                
            }}
        >
            <TableContainer sx={{ maxHeight: 530 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow >
                            <TableCell sx={{color: '#FFF',background: '#3c5fa3',borderRight: '1.5px solid #c1c3c7', textAlign:'center'}}>Name</TableCell>
                            <TableCell sx={{color: '#FFF',background: '#3c5fa3',textAlign:'center', borderRight: '1.5px solid #c1c3c7' }}>
                                Meals
                            </TableCell>
                            <TableCell sx={{color: '#FFF',background: '#3c5fa3',borderRight: '1.5px solid #c1c3c7', textAlign:'center'}} >Total Price</TableCell>
                            <TableCell align="center" sx={{ color: '#FFF',background: '#3c5fa3'}}>Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {meals
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((meal) => (
                                <TableRow
                                    // eslint-disable-next-line no-underscore-dangle
                                    key={meal._id}
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                >
                                    <TableCell component="th" scope="row">
                                        <Name>{meal.user.name}</Name>
                                    </TableCell>

                                    <TableCell align="center" scope="row">
                                        <StyledUl>
                                            {meal.items.map((item) => (
                                                <li 
                                                    // eslint-disable-next-line no-underscore-dangle
                                                    key={item._id}
                                                >
                                                    <h2>{item.title} </h2>
                                                    <h3>
                                                        {' '}
                                                        price: {item.price}
                                                    </h3>
                                                    <h4>
                                                        amount: {item.amount}
                                                    </h4>
                                                </li>
                                            ))}
                                        </StyledUl>
                                    </TableCell>

                                    <TableCell>
                                        <TotalPrice>
                                            {meal.totalPrice}
                                        </TotalPrice>
                                    </TableCell>
                                    <TableCell align="center" scope="row">
                                        <Dates>{date(meal.createdAt)}</Dates>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                sx={{color: '#FFF',background: '#3c5fa3'}}
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={meals.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}

const StyledUl = styled.ul`
    list-style: none;
    li {
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-bottom: 1.5px solid #c1c3c7;
        padding: 10px;
        margin-top: 10px;
    }
    h2 {
        max-width: 200px;
        font-size: 15px;
    }
    h4 {
        font-size: 15px;
    }
    h3 {
        font-size: 15px;
    }
`
const Name = styled.h1`
    font-weight: 700;
    max-width: 300px;
    text-align: center;
`
const TotalPrice = styled.span`
    font-size: 24px;
    margin-left: 30px;
    font-weight: 700;
`
const Dates = styled.span`
    font-size: 15px;
    color: #1a0256;
    padding: 5px;
    font-weight: 800;
`