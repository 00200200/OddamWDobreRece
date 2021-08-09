import React, {useState} from 'react';

const Posts = ({loading,posts}) => {
    const [fundationHidden,setFundationHidden] = useState(false)

    if(loading){
         return <h2>Loading...</h2>
     }
    return <div  style={fundationHidden?{display:"none"}:{display:"block"}} className="OrgansationsWrapper">
        {/*{posts.map(post =>(*/}
        {/*    <li key={post.id}>*/}
        {/*        {post.title}*/}
        {/*    </li>*/}
        {/*))}*/}
        <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz
                     sprawdzić
                  czym się zajmują, komu pomagają i czego potrzebują.</p>
        <div className="OrganisationsWrapper">
            {posts.map(post =>(<div className="OrganisationsWrap">

                <div className="OrganisationsWrapLeftSide">
                    <h3>{post.title}</h3>
                    <p>{post.mission}</p>
                </div>
                <div className="OrganisationsWrapRightSide">
                    <p>{post.items}</p>
                </div>
            </div>))}
        </div>
   </div>
};

export default Posts;