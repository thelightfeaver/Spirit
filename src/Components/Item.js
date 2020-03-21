import React  from 'react';
import { Link} from 'react-router-dom'

export const Post = (data) => 
{

    
        return(
            <section >
                <Link to={"/receipt:"+data.key} > 
                
                    <div className="post">
                        <div className="post-upper">
                            <img src={data.data.img} aria-hidden width="200" height="200" alt=""/>
                        </div>
                        <div className="post-lower">
                            <p>{data.data.title}</p>
                        </div>
                    </div>
                </Link>
                
                
            </section>
        )
    
}