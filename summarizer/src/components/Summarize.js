import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload} from '@fortawesome/free-solid-svg-icons'
import "../styles/summarize.css"

class Summarize extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className="summarize">
                    <div className="summarize-row">
                        <p className="strong">Company:</p>
                        <p>HVCA</p>
                    </div>
                    <div className="summarize-row">
                        <p className="strong">Author:</p>
                        <p>Zsembery Levente, Budai Judit, Bajorfi Ákos</p>
                    </div>
                    <div className="summarize-row">
                        <p className="strong">Title:</p>
                        <p>CONCEPT PROPOSAL FOR FUTURE JEREMIE VENTURE CAPITAL PROGRAMS</p>
                    </div>
                    <div className="summarize-row">
                        <p className="strong">Summary of proposal:</p>
                        <p>
The programs were started in an environment in which capital was only available in isolated streams, and it was only available to companies at certain phases of development. JEREMIE programs have already produced perceptible results, however, real economic stimulus can only be achieved if the program continues. On one hand, portfolio companies that have already received financing can continue to grow with assistance from the programs. On the other hand, any company that has not yet received financing from JEREMIE programs would benefit from these venture capital related funds.<br/><br/>

The economic stimulus effects of venture capital may be obvious to everyone, but only few are aware of its effect on economy recovery. Statistical data demonstrate that a 0.1% increase of GDP results in a 0.3% GDP increase in the volume of venture capital . Therefore, each Hungarian Forint invested in venture capital will produce a threefold increase in GDP. This prominent multiplier helps to understand the economic stimulus effect.<br/><br/>

As the data also indicate, it is in the interests of the country and the market participants to have an appropriate source available for venture capital investments, and these investments should be made as soon as possible in order to ensure the effect on economy recovery. Based on the experience of the last five years, we would like to sum up the following suggestions regarding the timing and structure of the venture capital programs that will be launched in the future. There are currently four overlapping programs that were launched successively, and because they all share the same investment period, they are manageable as a single unit. In the following, we have listed our thoughts in light of past cornerstones, as well as the structure and the timing of the programs.<br/><br/>
</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Summarize

