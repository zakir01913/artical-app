import { connect } from 'react-redux'
import ArticalList from '../components/articalList'

const mapStateToProps = state => {
    return {
        articals: state.articals
    }
}

const ArticalListContainer = connect(mapStateToProps)(ArticalList)

export default ArticalListContainer