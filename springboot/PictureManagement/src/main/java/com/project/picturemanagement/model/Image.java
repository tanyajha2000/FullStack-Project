package com.project.picturemanagement.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Size;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "image_tbl1")
public class Image {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int imageId;

	@Size(min = 3, message = "minimum 3 letter required")
	@Column(name = "imageName")
	private String imageName;

	@NotBlank(message = "ImageUrl can't be empty")
	@Column(name = "imageUrl")
	private String imageUrl;

	@Size(min = 3, message = "minimum 3 letter required")
	@Column(name = "imageTag")
	private String imageTag;

	@ManyToOne(fetch = FetchType.LAZY)
	private User user;

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Image() {
	}

	public Image(int imageId, String imageName, String imageUrl, String imageTag) {
		super();
		this.imageId = imageId;
		this.imageName = imageName;
		this.imageUrl = imageUrl;
		this.imageTag = imageTag;
	}

	public int getImageId() {
		return imageId;
	}

	public void setImageId(int imageId) {
		this.imageId = imageId;
	}

	public String getImageName() {
		return imageName;
	}

	public void setImageName(String imageName) {
		this.imageName = imageName;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public String getImageTag() {
		return imageTag;
	}

	public void setImageTag(String imageTag) {
		this.imageTag = imageTag;
	}

	@Override
	public String toString() {
		return "Image [imageId=" + imageId + ", imageName=" + imageName + ", imageUrl=" + imageUrl + ", imageTag="
				+ imageTag + "]";
	}
}
