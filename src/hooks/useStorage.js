//import React from "react";
import firebase from "firebase/compat";
//import { Firestore } from "firebase/firestore";
import {useEffect,useState} from 'react';
import { ProjectStorage,ProjectFirestore,timeStamp} from "../firebase/config";

const useStorage=(file)=>{
    const [progress,setProgress]=useState(0);
    const [error,setError]=useState(null);
    const [url,setUrl]=useState(null);
    useEffect(()=>{

        const storageRef=ProjectStorage.ref(file.name);
        const collectionRef=ProjectFirestore.collection('images');
        
        storageRef.put(file).on('state_changed',(snap)=>{
            let percent=(snap.bytesTransferred/snap.totalBytes)*100;
            setProgress(percent);
        },(err)=>{
            setError(err);
        },async ()=>{
            const url=await storageRef.getDownloadURL();
            setUrl(url);
            const createdAt = timeStamp();
            await collectionRef.add({url,createdAt});  
        })
    },[file])
    return{ progress,url,error}
}
export default useStorage;