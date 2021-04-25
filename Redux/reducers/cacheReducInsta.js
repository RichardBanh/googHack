//point of entry
//load into the file system here
//preload
//map function
//load initial state

//initial state must be static with a prerequire
import { FileSystem } from "expo";
import hash from "@emotion/hash";
import { useDispatch } from "react-redux";
import INSTAPOST, { BRAND } from "../../data/dumby.js";

//load data in

const sendRedux = useDispatch();

const initialState = [{ brand: "", brandURI: "", shared: "" }];

//Match it to the post to brand


export async function fetchAssetsMap(data) {

	
}
