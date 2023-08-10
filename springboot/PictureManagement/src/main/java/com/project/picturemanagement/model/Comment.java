package com.project.picturemanagement.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "comment_tbl1")
public class Comment {
	@Id
	@GeneratedValue
	private int commentid;

	private String usercomment;

	@ManyToOne()
	@JoinColumn
	private Image image;

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@ManyToOne

	private User user;

	public Image getImage() {
		return image;
	}

	public void setImage(Image image) {
		this.image = image;
	}

	public String getUsercomment() {
		return usercomment;
	}

	public void setUsercomment(String usercomment) {
		this.usercomment = usercomment;
	}

	public Comment() {

	}

	public int getCommentid() {
		return commentid;
	}

	public void setCommentid(int commentid) {
		this.commentid = commentid;
	}

	@Override
	public String toString() {
		return "Comment [commentid=" + commentid + ", usercomment=" + usercomment + "]";
	}

	public Comment(int commentid, @NotBlank(message = "Comment Can't be blank") String usercomment) {
		super();
		this.commentid = commentid;
		this.usercomment = usercomment;
	}

}
