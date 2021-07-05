import React from 'react'
import { Button } from 'react-bootstrap'
// import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../Redux/Actions/Actions'

const Counter = (props) => {

    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    const n = 10

    return (
        <div className="counterContainer">
            {/* Without Hooks */}
            {/* <Button variant="dark" onClick={() => props.increment()}>Increment</Button>
            <h2 className="count">{props.count}</h2>
            <Button variant="dark" onClick={() => props.decrement()}>Decrement</Button> */}

            {/* With Hooks */}
            <Button variant="dark" onClick={() => dispatch(increment(n))}>Increment</Button>
            <h2 className="count">{count}</h2>
            <Button variant="dark" onClick={() => dispatch(decrement(n))}>Decrement</Button>
        </div>
    )
}

export default Counter


// const mapStateToProps = state => {
//     return {
//         count: state.count
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         increment: () => dispatch(increment()),
//         decrement: () => dispatch(decrement())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)
