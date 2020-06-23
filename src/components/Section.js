import React from 'react'
import './Section.css'
import Waves from './Waves'


const Section = props => (
    <div className="SectionGroup">
        <div className="WaveBottom"><Waves/></div>
        <div className="WaveTop"><Waves/></div>
        <img className="SectionLogo" src={props.logo}/>
        <div className="SectionTitleGroup">
            <h3 className="SectionTitle">{props.title}</h3>
            <p className="SectionText">{props.text}</p>
        </div>
    </div>
)

export default Section