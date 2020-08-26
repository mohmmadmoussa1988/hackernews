import axios from 'axios';
import {selectFields} from '../selectors/selectFields';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl =  `${baseUrl}newstories.json`;
export const topStoriesUrl =  `${baseUrl}topstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getNewStoryIds = async () =>{
    const LoadedIds = await axios.get(newStoriesUrl).then(({data}) => data);
    const result=[];
    // forloop used because it waits untill the finishing of the order
    let testdata = 0;
    for(const element of LoadedIds){
        testdata++;
        result.push(await getStory(element));
        
        if(testdata==5){
            return result;
        }
    }
    // The reason for collecting sorties IDs and Story data is to be able to filter results
    return result;
}

export const getTopStoryIds = async () =>{
    const LoadedIds = await axios.get(topStoriesUrl).then(({data}) => data);
    const result=[];
    // forloop used because it waits untill the finishing of the order
    let testdata = 0;
    for(const element of LoadedIds){
        testdata++;
        result.push(await getStory(element));
        
        if(testdata==5){
            return result;
        }
    }
    // The reason for collecting sorties IDs and Story data is to be able to filter results
    return result;
}

export const getStory = async (storyId) =>{
    return new Promise(async (resolve, reject) => {
    const result = await axios.get(`${storyUrl+storyId}.json`)
    .then(({data}) => data &&  selectFields(data));
    resolve(result);
    })
}