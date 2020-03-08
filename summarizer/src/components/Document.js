import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload} from '@fortawesome/free-solid-svg-icons'
import "../styles/document.css"
class Document extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className="document">
                    <h1>CONCEPT PROPOSAL FOR FUTURE JEREMIE VENTURE CAPITAL PROGRAMS</h1><br/>
                    <p>JEREMIE programs were started in 2009, and they made a major impact on the domestic venture capital market. As a result of the programs, significant private funds have been involved in financing early-phase companies, and many of these companies have been financed on this equity basis. The programs were started in an environment in which capital was only available in isolated streams, and it was only available to companies at certain phases of development. JEREMIE programs have already produced perceptible results, however, real economic stimulus can only be achieved if the program continues. On one hand, portfolio companies that have already received financing can continue to grow with assistance from the programs.  On the other hand, any company (at whichever phase of development) that has not yet received financing from JEREMIE programs would benefit from these venture capital related funds.<br/><br/>    
The economic stimulus effects of venture capital may be obvious to everyone, but only few are aware of its effect on economy recovery. <br/><br/> Statistical data demonstrate that a 0.1% increase of GDP results in a 0.3% GDP increase in the volume of venture capital (Deutsche Bank Research, Thomas Meyer, 2010.09.14). Therefore, each Hungarian Forint invested in venture capital will produce a threefold increase in GDP. This prominent multiplier helps to understand the economic stimulus effect. As the data also indicate, it is in the interests of the country and the market participants to have an appropriate source available for venture capital investments, and these investments should be made as soon as possible in order to ensure the effect on economy recovery.  Based on the experience of the last five years, we would like to sum up the following suggestions regarding the timing and structure of the venture capital programs that will be launched in the future.<br/><br/>
There are currently four overlapping programs that were launched successively, and because they all share the same investment period, they are manageable as a single unit. The cornerstones of the programs are as follows: - Co-financing: co-funds have been established in which the proportion of the EU funds cannot exceed 70% - Geographic limitation: with only one exception, the investment of funds can only be performed outside the region of Central Hungary. - Time limitation: if the company was established earlier than five years, it cannot raise its capital. - Sectorial limitation: due to applicable EU regulations, certain activities cannot be financed from the available sources, and therefore are excluded from the financed investment categories. Given the experience we have gained, we are now able to reconsider the JEREMIE programs’ previous cornerstones. Furthermore, we can explore how to adapt the programs so that they can continue to succeed in a corporate ecosystem with changed market conditions. In the following, we have listed our thoughts in light of past cornerstones, as well as the structure and the timing of the programs. </p>
                    <p>As with most myths, there’s some truth to this story. Arthur Rock, Tommy Davis, Tom Perkins, Eugene Kleiner, and other early venture capitalists are legendary for the parts they played in creating the modern computer industry. Their investing knowledge and operating experience were as valuable as their capital. But as the venture capital business has evolved over the past 30 years, the image of a cowboy with his sidekick has become increasingly outdated. Today’s venture capitalists look more like bankers, and the entrepreneurs they fund look more like M.B.A.’s.</p>
                    <p>The U.S. venture-capital industry is envied throughout the world as an engine of economic growth. Although the collective imagination romanticizes the industry, separating the popular myths from the current realities is crucial to understanding how this important piece of the U.S. economy operates. For entrepreneurs (and would-be entrepreneurs), such an analysis may prove especially beneficial. </p>
                    <p>Contrary to popular perception, venture capital plays only a minor role in funding basic innovation. Venture capitalists invested more than $10 billion in 1997, but only 6%, or $600 million, went to startups. Moreover, we estimate that less than $1 billion of the total venture-capital pool went to R&D. The majority of that capital went to follow-on funding for projects originally developed through the far greater expenditures of governments ($63 billion) and corporations ($133 billion).</p>
                    <Link to="/summarize"><button>Summarize</button></Link>
                </div>
            </div>
        )
    }
}

export default Document

