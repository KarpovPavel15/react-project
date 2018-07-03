import React,{Component} from 'react';

class Article extends Component {
    state={
        isOpen:false
    };
    render() {
        const {content} = this.props;
        const body = this.state.isOpen && <section>{content.text}</section>;
        return (
            <div>
                <h2>
                    {content.title}
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? 'close':'open'}
                    </button>
                </h2>
                {body}
                <h3>creation date:{(new Date(content.date)).toDateString()}</h3>
            </div>
        )
    }
        handleClick=()=>{
            console.log('---','clicked')
            this.setState({
                isOpen:!this.state.isOpen
            })
        }

}
/*function Article(props) {
    const {content}=props;
    const body=<section>{content.text}</section>;
    return(
        <div >
            <h2>
                {content.title}
                <button onClick={clickFunction}>Click</button>
            </h2>
            {body}
            <h3>creation date:{(new Date(content.date)).toDateString()}</h3>
        </div>
    )*/
export default Article