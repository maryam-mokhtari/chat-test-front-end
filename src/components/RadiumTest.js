import Radium from 'radium'
import React  from 'react'
import color  from 'color'

class Div extends React.Component {
    render() {
        return (
            <div style={[styles.base, styles.header]}>
                {this.props.children}
            </div>
        )
    }
}
const backColor = '#ffaacc'
const styles = {
    base: {
        backgroundColor: backColor,
        ':hover': {
            backgroundColor:color(backColor).lighten(0.1).hexString()
        }
    },

    header: {
        //   @extend .container,
        marginTop: 20,
        padding: 12,
        color: '#fff',
        fontWeight: 'bold',
        backgroundColor: '#006699',
        ':hover': {
            backgroundColor: '#ffaacc',
        }
    },

}

export default Radium(Div)
