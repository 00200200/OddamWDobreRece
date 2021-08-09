import React, {useEffect, useState} from 'react';
import firebase from "../services/firebase";
import Posts from "./Posts";
import Pagination from "./Pagination";

const Organisations = () => {
    const [posts, setPosts] = useState([])
    const foundationData = [];
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(3)
    const [loading, setLoading] = useState(false)
    useEffect(() => {

        firebase.collection('organisations').get().then(docs => {
                docs.forEach(doc => {
                    foundationData.push(doc.data())
                })
                console.log("foundationData", foundationData)
                setPosts(foundationData)
                setLoading(false)
            }
        )
    }, [])
    const indexOfLastPost =  currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost)
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div>
            <Posts posts={currentPosts} loading={loading}/>
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
        </div>
    );
};

export default Organisations;