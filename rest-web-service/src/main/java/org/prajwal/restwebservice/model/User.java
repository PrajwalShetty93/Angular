package org.prajwal.restwebservice.model;

public class User {

	private Integer compId;
	public User(Integer compId, String name, Integer contact, String address) {
		super();
		this.compId = compId;
		this.name = name;
		this.contact = contact;
		this.address = address;
	}
	public Integer getCompId() {
		return compId;
	}
	public void setCompId(Integer compId) {
		this.compId = compId;
	}
	private String name;
	private Integer contact;
	private String address;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getContact() {
		return contact;
	}
	public void setContact(Integer contact) {
		this.contact = contact;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
}
