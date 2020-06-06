import * as React from "react";

export default class ClickCounter extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = { clicks: 0};
    }


    render() {
        return(
            <div className="App" onClick={() => {
                this.setState({ clicks: this.state.clicks + 1})
            }
            }>{this.state.clicks}</div>
        )
    }
}
