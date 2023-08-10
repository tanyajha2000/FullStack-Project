import { React } from 'react'
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CommentService  from './CommentService';
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import {toast } from 'react-toastify'; 


function UpdateComment() {
	const navigate = useNavigate();
	const location = useLocation();
	const [state, setState] = useState(location.state);


	const handleUpdate = (e) => {
		e.preventDefault();
		if(state.usercomment===""){
			toast.error("Comment can't be blank!",{theme: "dark",height:"400px",width:"4000"})
			navigate(-1)
		}else{
			CommentService.updateComment(state.commentid, state).then((data)=>{
				navigate(-1)	
			}).catch(error=>{
				if(error.response.data.status===500){
					console.log(error.response.data.message)
					toast.warning(error.response.data.message)
				}
				else{
					console.log(error)
					toast.warning(error.response.data)
			}})
		}			   
	}

	const changeState = (value, name) => {
		setState({ ...state, [name]: value });
	};

	const { commentid, usercomment } = state
	return (
		
		<div className="container mt-3 ">
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<h1 className="text-center mb-5">Edit Comment</h1>
					<form >
						<p key={commentid}></p>
						<div className="form-group row">
							<label className="col-sm-2 col-form-label">CommentId</label>
							<div className="col-sm-10">
								<input type="text"
									value={commentid}
									name="commentid"
									className="form-control"
									readOnly
								/>
							</div>
							<hr />
						</div>

						<div className="form-group row">
							<label className="col-sm-2 col-form-label">Comment</label>
							<div className="col-sm-10">
								<input
									type="text"
									className="form-control"
									name="usercomment"
									placeholder="Modify Comment"
									value={usercomment}
									onChange={(e) => changeState(e.target.value, e.target.name)}
								/>
							</div>
						</div>
						<br />
						<div className="container text-center">
							<button
								type="submit"
								className="btn btn-warning"
								onClick={handleUpdate}
							>Update</button>
						</div>

					</form>
				</div>
			</div>
		</div>
	)
}

export default UpdateComment