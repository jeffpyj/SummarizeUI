import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import "../styles/summarize.css";

class Summarize extends Component {
  render() {
    return (
      <div>
        <Nav />
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
            <div className="paragraphs">
              <p>
                ...CONCEPT PROPOSAL FOR FUTURE JEREMIE VENTURE CAPITAL PROGRAMS
                HVCA proposal 2 JEREMIE programs were started in 2009, and they
                made a major impact on the domestic venture capital market....{" "}
                <br />
                <br />
                ...As a result of the programs, significant private funds have
                been involved in financing early-phase companies, and many of
                these companies have been financed on this equity basis....{" "}
                <br />
                <br />
                ...JEREMIE programs have already produced perceptible results,
                however, real economic stimulus can only be achieved if the
                program continues.... <br />
                <br />
                ...On one hand, portfolio companies that have already received
                financing can continue to grow with assistance from the
                programs.... <br />
                <br />
                ...On the other hand, any company (at whichever phase of
                development) that has not yet received financing from JEREMIE
                programs would benefit from these venture capital related
                funds.... <br />
                <br />
                ...Therefore, each Hungarian Forint invested in venture capital
                will produce a threefold increase in GDP.... <br />
                <br />
                ...As the data also indicate, it is in the interests of the
                country and the market participants to have an appropriate
                source available for venture capital investments, and these
                investments should be made as soon as possible in order to
                ensure the effect on economy recovery.... <br />
                <br />
                ...There had been only one such fund in the JEREMIE's domestic
                program.... <br />
                <br />
                ...Furthermore, small private capital could also participate in
                the program, and this would increase the liability base when
                financing early-phase companies.... <br />
                <br />
                ...In light of these features of the Hungarian economy, many
                companies funded by JEREMIE programs were based in Budapest;
                however, their registered seats were variously listed as being
                in other parts of the region as a whole.... <br />
                <br />
                ...Domestic JEREMIE funds receive the greatest amount of venture
                capital and the greatest number of venture capital sources....{" "}
                <br />
                <br />
                ...As such, additional and future JEREMIE funding is all but
                assured at the domestic level.... <br />
                <br />
                ...Current regulations limit investment in the above-described
                funds (i.e., those in which the same company is financed by
                multiple sources).... <br />
                <br />
                ...Regulations stipulate that a company's available capital
                cannot be increased by such co-financing.... <br />
                <br />
                ...Although these regulations pose no problems during a
                company's seed phase, domestic financing can be hindered by such
                regulations during a company's growth phase (i.e., when a
                company's financing needs often grow rapidly).... <br />
                <br />
                ...Seed funds were started as part of the JEREMIE II program....{" "}
                <br />
                <br />
                ...The Gazelle program, which is distinct from the JEREMIE
                program, was announced next....
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Summarize;
