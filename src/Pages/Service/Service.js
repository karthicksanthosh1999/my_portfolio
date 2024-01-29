import React from 'react'
import img1 from '../../Assets/icons/icon1.png'
import img2 from '../../Assets/icons/icon2.png'
import img3 from '../../Assets/icons/icon3.png'
import img4 from '../../Assets/icons/icon4.png'
import img5 from '../../Assets/icons/icon5.png'
import img6 from '../../Assets/icons/icon6.png'
import './service.scss'

export const serviceData = [
    {
        src : img6,
        head : "Continuous Learning",
        content : "A willingness to stay updated on emerging technologies, tools, and industry best practices. The software development field is dynamic, and continuous learning is essential."
    },
    {
        src : img1,
        head : "Security Best Practices",
        content : "Awareness of security principles and best practices in software development. Understanding potential vulnerabilities and implementing secure coding practices."
    },
    {
        src : img2,
        head : "Data Structures and Algorithms:",
        content : "Strong understanding of fundamental data structures (arrays, linked lists, trees, graphs) and algorithms. This is crucial for developing efficient and scalable software solutions."
    },
    {
        src : img3,
        head : "Agile Development",
        content : "Agile is a project management methodology where software engineers work in iterative cycles, responding to changes and delivering incremental improvements to the software."
    },
    {
        src : img4,
        head : "Problem Solving",
        content : "Ability to analyze complex problems, break them down into smaller components, and design effective solutions. Problem-solving skills are essential for creating robust and efficient software."
    },
    {
        src : img5,
        head : "Cloud Computing",
        content : "Familiarity with cloud platforms such as AWS, Azure, or Google Cloud. Knowledge of deploying and managing applications in a cloud environment."
    },
]

const Service = () => {
  return (
    <div className='service' id='service'>
        <h3 className='service-header'>SERVICE</h3>
<div className='service-container'>
    {
        serviceData.map((cards,i)=>{
            return(
                <div className='service-card' key={i}>
                    <div className='card'>
                        <img src={cards.src} alt={cards.head}/>
                        <h3 className='service-h3'>{cards.head}</h3>
                        <p>{cards.content}</p>
                    </div>
                </div>
            )
        })
    }
</div>
    </div>
  )
}

export default Service