import React from 'react';
//import {connect} from 'react-redux';

//import Btn from '../common/Btn.js';

class InputData extends React.Component {
	constructor(props){
		super(props);
		this.state ={
			input:""
		}
		this.onClickSaveTask = props.onClickSaveTask;
		this.className = props.className;
	}

	onClickCancelBtn(e) {
		this.field.value = "";
		this.setState({
			input: ""
		});
		this.editor.classList.toggle("hide");
	}
	onChangeInput(e){
		this.setState({
			input: this.field.value
		})
	}
	onClickSaveBtn(e){
		let {input} = this.state;
		input && this.onClickSaveTask(input);
		this.field.value = "";
		this.setState({
			input: ""
		});
	}
	render() {
		let {className} = this.props;
		return (
			<div 
				className={`${className}__addData hide`}
				ref={(div) => { this.editor = div}}
			>
				<input 
					className={`${className}__addData--input`}
					type="text"
					ref={(input) => {this.field = input}}
					onChange={this.onChangeInput.bind(this)}
				/>
				<button
					className={`${className}__addData--save`}
					children="Сохранить задачу"
					onClick={this.onClickSaveBtn.bind(this)}
				>
				</button>
				
				<button
					className={`${className}__addData--cancel`}
					children="Отмена"
					onClick={this.onClickCancelBtn.bind(this)}
				/>
			</div>
		);
	}
}

// //мапим обьект store в props
// const mapStateToProps = state => ({store:state});

// //нужен для запуска actions
// //dispatch - это метод store, к ней есть доступ через connect
// const mapDispatchToProps = dispatch => ({
// 	onClickSaveTask: newTask => 
// 		dispatch({
// 			type: 'Add_task',
// 			payload:{
// 				value: newTask,
// 				id: Date.now()
// 			}
// 		})
// });



export default InputData;




