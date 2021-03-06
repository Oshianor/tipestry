import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography"
import Header from "../src/components/header/basicheader";

class Contests extends Component {
	
	render() {
		return (
			<div>
				<Header />
				<div style={{ margin: "80px 10%", textAlign: "left" }} >
					<Typography variant="h4" >TIPESTRY CONTESTS - OFFICIAL RULES</Typography>
					<Typography variant="h6" >NO PURCHASE NECESSARY TO ENTER OR WIN. MAKING A PURCHASE OR PAYMENT OF ANY KIND WILL NOT INCREASE YOUR CHANCES OF WINNING. VOID WHERE PROHIBITED OR RESTRICTED BY LAW</Typography>
					<ul>
						<li>By participating in the Contest, each Entrant unconditionally accepts and agrees to comply with and abide by these Official Rules and the decisions of Sponsor, which shall be final and binding in all respects. Sponsor is responsible for the collection, submission or processing of Entries and the overall administration of the Contest. Entrants should look solely to Sponsor with any questions, comments or problems related to the Contest. Sponsor may be reached by email at feedback@tipestry.com during the Promotion Period. </li>
						<li>ELIGIBILITY: Open to legal residents who are 18 years of age (the \"Entrant\"). Sponsor, and their respective parents, subsidiaries, affiliates, distributors, retailers, sales representatives, advertising and promotion agencies and each of their respective officers, directors and employees (the \"Promotion Entities\"), are ineligible to enter the Contest or win a prize. Household Members and Immediate Family Members of such individuals are also not eligible to enter or win. "Household Members" shall mean those people who share the same residence at least three months a year. "Immediate Family Members" shall mean parents, step-parents, legal guardians, children, step-children, siblings, step-siblings, or spouses. This Contest is subject to all applicable federal, state and local laws and regulations and is void where prohibited or restricted by law. </li>
						<li>PRIZES: Only one prize per person and per household per Contest will be awarded. Gift cards and gift certificates are subject to the terms and conditions of the issuer. Prizes cannot be transferred, redeemed for cash or substituted by winner. Sponsor reserves the right in its sole and absolute discretion to award a substitute prize of equal or greater value if a prize described in these Official Rules is unavailable or cannot be awarded, in whole or in part, for any reason. The ARV of the prize represents Sponsor's good faith determination. That determination is final and binding and cannot be appealed. If the actual value of the prize turns out to be less than the stated ARV, the difference will not be awarded in cash. Sponsor makes no representation or warranty concerning the appearance, safety or performance of any prize awarded. Restrictions, conditions, and limitations may apply. Sponsor will not replace any lost or stolen prize items.</li>
					</ul>
					<Typography variant="h6" >
						All federal, state and/or local taxes, fees, and surcharges are the sole responsibility of the prize winner. 
						Failure to comply with the Official Rules will result in forfeiture of the prize.
					</Typography>
					<br />
					<ol>
						<li>
							HOW TO ENTER: 
							Enter the Contest during the Promotion Period online by following the Contest rules posted on this site.
							<br />
							Automated or robotic Entries submitted by individuals or organizations will be disqualified. 
							Internet entry must be made by the Entrant. Any attempt by Entrant to obtain more than the stated number of Entries by using multiple/different email addresses, identities, registrations, logins or any other methods, including, but not limited to, commercial contest/Contest subscription notification and/or entering services, will void Entrant's Entries and that Entrant may be disqualified. 
							Final eligibility for the award of any prize is subject to eligibility verification as set forth below. 
							All Entries must be posted by the end of the Promotion Period in order to participate. Sponsor's database clock will be the official timekeeper for this Contest.
						</li>
						<li>WINNER SELECTION: The Winner(s) of the Contests will be selected from among all eligible Entries received throughout the Promotion Period. The selection will be conductedafter the Promotion Period by Sponsor or its designated representatives, whose decisions are final.</li>
						<li>
							WINNER NOTIFICATION: Winner will be tipped on Tipestry after the Winner is selected. Potential Winner must accept a prize tip as directed by Sponsor. Sponsor is not responsible for any delay or failure to receive notification for any reason, including inactive email account(s), technical difficulties associated therewith, or Winner’s failure to adequately monitor any email account.
							<br />
									Any winner notification not responded to or returned as undeliverable may result in prize forfeiture. The potential prize winner may be required to sign and return an affidavit of eligibility and release of liability, and a Publicity Release (collectively \"the Prize Claim Documents\"). No substitution or transfer of a prize is permitted except by Sponsor.
						</li>
						<li>PRIVACY: Any personal information supplied by you will be subject to the privacy policy of the Sponsor posted at tipestry.com/privacypolicy. By entering the Contest, you grant Sponsor permission to share your email address and any other personally identifiable information with the other Contest Entities for the purpose of administration and prize fulfillment, including use in a publicly available Winners list.</li>
						<li>LIMITATION OF LIABILITY: Sponsor assumes no responsibility or liability for (a) any incorrect or inaccurate entry information, or for any faulty or failed electronic data transmissions; (b) any unauthorized access to, or theft, destruction or alteration of entries at any point in the operation of this Contest; (c) any technical malfunction, failure, error, omission, interruption, deletion, defect, delay in operation or communications line failure, regardless of cause, with regard to any equipment, systems, networks, lines, satellites, servers, camera, computers or providers utilized in any aspect of the operation of the Contest; (d) inaccessibility or unavailability of any network or wireless service, the Internet or website or any combination thereof; (e) suspended or discontinued Internet, wireless or landline phone service; or (f) any injury or damage to participant's or to any other person’s computer or mobile device which may be related to or resulting from any attempt to participate in the Contest or download of any materials in the Contest.
							<br />
							If, for any reason, the Contest is not capable of running as planned for reasons which may include without limitation, infection by computer virus, tampering, unauthorized intervention, fraud, technical failures, or any other causes which may corrupt or affect the administration, security, fairness, integrity or proper conduct of this Contest, the Sponsor reserves the right at its sole discretion to cancel, terminate, modify or suspend the Contest in whole or in part. In such event, Sponsor shall immediately suspend all drawings and prize awards, and Sponsor reserves the right to award any remaining prizes (up to the total ARV as set forth in these Official Rules) in a manner deemed fair and equitable by Sponsor. Sponsor and Released Parties shall not have any further liability to any participant in connection with the Contest.</li>
						<li>SOCIAL NETWORK DISCLAIMER<br />
							A Facebook account may be required to enter.If you don’ t already have a Facebook account, visit www.facebook.com to create one.It is free to create an account.This promotion is in no way sponsored, endorsed or administered by, or associated with Facebook.You understand that you are providing your information to the Sponsor and not to Facebook.By participating via the Facebook platform, participants are also subject to Facebook’ s data policy and terms of use, which can be found at 
							< a href = "https://www.facebook.com/about/privacy" > https: //www.facebook.com/about/privacy</a> and <a href="https://www.facebook.com/legal/terms/update">https://www.facebook.com/legal/terms/update</a> .</li>
						<li>SPONSOR: TIPESTRY LTD</li>
						<li>
							ADMINISTRATOR: <br />
							TIPESTRY LTD, <br />
							OFFICE 7<br />
							35-37 LUDGATE HILL<br />
							LONDON<br />
							EC4M 7JN<br />
							UNITED KINGDOM<br />
							FEEDBACK@TIPESTRY.COM<br />
						</li>
					</ol>
				</div>
			</div>
		);
	}
}

export default Contests;