import React,{Component} from "react";
 class SumNumbers extends Component{
    state = {
        firstNumber: 0,
        secondNumber: 0,
        sum: 0,
        sumString:"The component has not updated the state"
    };

    componentDidMount() {
        console.log("We are in Component Did Mount of SumNumbers")
        testAPI(5,6).then((sum)=> {
            this.setSum(sum);
        });
    }
    componentDidUpdate() {
        console.log("Component has updated");
        this.setState({...this.state,sumString: `the sum is : ${this.state.sum}`});
    }

    setSum= (sum , firstNumber, secondNumber ) => {
        if(typeof sum !== "undefined"){
            this.setState({...this.state,sum})
        }else{
            this.setState({...this.state.firstNumber + this.state.secondNumber});
        }
    };

    render() {
        return (
            <div>
                <input
                 type="number"
                placeholder="Enter first Number"
                onChange={(e) => {
                    this.setState({
                        ...this.state, 
                        firstNumber: parseInt(e.target.value),
                });
                }}
                value={this.state.firstNumber}
                />
                 <input
                 type="number"
                placeholder="Enter Second Number"
                onChange={(e) => {
                    this.setState({
                        ...this.state,
                         SecondNumber: parseInt(e.target.value),
                });
                }}
                value={this.state.secondNumber}
                />
                <button onClick={(e) => this.setSum()} > Add Numbers</button>
                <h3> The sum is: {this.state.sum}</h3>
            </div>
    
        );
    }

 }
 export default SumNumbers;