//point of entry
//load into the file system here
//preload
//map function
//load initial state

//initial state must be static with a prerequire
import { FileSystem } from "expo";
import hash from "@emotion/hash";


//load data in

export function fetchAssetsMap(dispatch) {
	//dispatch has to be called at the end of this
    //mapfunction
    const {uri} = this.props.uri;
    const name = hash(uri);
    const path = `${FileSystem.cacheDirectory}${name}`;
    const image = await FileSystem.getInfoAsync(path);
    if (image.exists) {

    }

}
