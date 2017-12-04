import { connect } from 'react-redux'
import AddArticalForm from '../components/addArticalForm'
import { addArtical } from '../actions'


const mapStateToProps = ( state, ownProps) => {
    return ownProps
}

const mapDispatchToProps = dispatch => {
    return {
        addArtical: artical => {
            dispatch(addArtical(artical))
        }
    }
}

const AddArticalContainer = connect(mapStateToProps, mapDispatchToProps)(AddArticalForm)
export default AddArticalContainer