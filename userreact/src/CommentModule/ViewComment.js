import React, { useEffect, useState } from 'react';
import '../Styles/commentCss.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CommentService from './CommentService';
import { useNavigate, useParams, Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import UserApiService from '../UserModule/UserApiService';
import { toast } from 'react-toastify'

function ViewComment() {
    const [currentUser, setCurrentUser] = useState([])

    useEffect(() => {
        getuser();
    }, [])

    const getuser = async () => {
        const a = localStorage.getItem("user");
        UserApiService.getUserById(a).then((userdata) => {
            setCurrentUser(userdata.data)
        }).catch(error => {
            if (error.response.data.status === 500) {
                console.log(error.response.data.message)
                toast.warning(error.response.data.message)
            }
            else {
                console.log(error)
                toast.warning(error.response.data)
            }
        })
    }
    const params = useParams(); //to get id from url
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const [comments, setComments] = useState([]);
    const [commentid, setCommentId] = useState("");

    useEffect(() => {
        getcomments();
    }, [])

    const getcomments = async () => {
        const response = await CommentService.getCommentByImageId(params.imageId);
        setComments(response.data);
        console.log(response.data)
    }

    const deleteComment = (e) => {
        e.preventDefault();
        CommentService.deleteComment(commentid).then((res) => {
            console.log("deleted");
            window.location.reload();
        }).catch(error => {
            if (error.response.data.status === 500) {
                console.log(error.response.data.message)
                toast.warning(error.response.data.message)
            }
            else {
                console.log(error)
                toast.warning(error.response.data)
            }
        })

    }

    const updateComment = (commentDetails) => {
        navigate("/updateComment", { state: commentDetails });
    }

    const initialValues = {
        usercomment: "",
        imageId: "",
        userId: ""
    }

    const validationSchema = Yup.object({
        usercomment: Yup.string().required("Blank Comment can't be added!")
    });

    const onSubmit = (values, onSubmitProps) => {
        CommentService.addCommentByImageId(params.imageId, currentUser.userId, values)
        onSubmitProps.resetForm();
        window.location.reload();
    }

    return (
        <Formik initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            <Form>
                <div className="container">
                    <div className="row bootstrap snippets bootdeys">
                        <div className="col-md-8 col-sm-12">

                            <br />
                            <h2>See who all commented on your post</h2>
                            <div className="comment-wrapper">
                                <div className="panel panel-info">
                                    <div className="panel-heading">List of Comments

                                        <Link to="/userProfile" className="btn btn-danger" style={{ marginLeft: "450px" }}>Back</Link>
                                    </div>
                                    <div>
                                        <ul className="media-list">
                                            {comments.map(c =>
                                                <li className="media">
                                                    <div className="media-body">
                                                        <p key={c.commentid}></p>
                                                        <strong className="text-success">@{c.user.username}</strong>
                                                        <p className='commentText'>{c.usercomment}</p>
                                                        <em
                                                            className="fa fa-trash text-danger deleteicon "
                                                            onClick={() => {
                                                                setCommentId(c.commentid);
                                                                setShow(true);
                                                            }} >
                                                        </em>

                                                    </div>
                                                </li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body>
                            <h4>Do you really want this comment to be deleted?</h4>
                            <p style={{ color: 'red' }}>This Process cannot be undone.</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="danger" onClick={deleteComment}>Delete</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </Form>
        </Formik>
    );
}

export default ViewComment