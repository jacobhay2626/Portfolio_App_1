// import NN_IMG from "../Assets/neural_network.jpeg"
// import NFT_IMG from "../Assets/NFT.jpeg"
// import CERT_IMG from "../Assets/coursera.png"
// import NOTT_IMG from "../Assets/nottingham.jpeg"
// import CSharp_IMG from "../Assets/C#.png"
// import PYTH_IMG from "../Assets/python.jpeg"
import {Link} from "react-router-dom";

function Portfolio() {
    return (
        <div className={"Portfolio_Page"}>


            <div className={"SQL_fundamentals"}>
                <h2 className={"SQL_fundamentals_title"}> SQL Fundamentals </h2>
                <p className={'SQL_description'}> Using fundamental concepts in SQL, I analysed three datasets describing schools, crime statistics
                    and census data in Chicago. Techniques used include: Group by, Order by, Like, Sub Queries and
                    Nested Selects.</p>
                <Link className={"SQL_link"}
                      to={"https://github.com/jacobhay2626/SQL_Fundamentals"} target={"_blank"}>Source
                    Code</Link>
            </div>

            <div className={"LSTM_v_RNN"}>
                <h2 className={"RNN_v_LSTM_title"}> LSTM vs RNN on historical Bitcoin dataset</h2>
                <p className={"RNN_v_LSTM_description"}> Using a historical Bitcoin dataset I compared
                    the performance of a LSTM model to a RNN model for forecasting.</p>

                <Link className={"RNN_v_LSTM_link"}
                      to={"https://github.com/jacobhay2626/SM_Technical_Indicators.git"} target={"_blank"}>Source
                    Code</Link>
            </div>

            <div className={"SM_tech_indicators"}>
                <div>
                    {/*<img className={"pyth_img_2"} src={PYTH_IMG} alt={"pyth"} width={90} height={100}/>*/}
                </div>
                <h2 className={"SM_tech_indicators_title"}> Stock Market Technical
                    Indicators</h2>
                <p className={"SM_tech_indicators_description"}> Using a stock market dataset I investigated different
                    technical indicators which can be applied for stock market analysis.
                    Along with visualizations of the indicators, this blog post includes a description of each indicator
                    and their applicability. </p>

                <Link className={'SM_tech_pdf'}
                      to={'https://acrobat.adobe.com/id/urn:aaid:sc:EU:5d7fc369-71a4-4201-9905-0c1540e8fb09'}
                      target={"_blank"}> View
                    Paper </Link>

                <Link className={"SM_tech_indicators_link"}
                      to={"https://github.com/jacobhay2626/SM_Technical_Indicators.git"} target={"_blank"}>Source
                    Code</Link>
            </div>


            <div className={"time_series_vis"}>
                <div>
                    {/*<img className={"pyth_img_1"} src={PYTH_IMG} alt={"pyth"} width={90} height={100}/>*/}
                </div>
                <h2 className={"time_series_vis_title"}> Time Series Visualizations</h2>
                <p className={"time_series_vis_description"}> I investigated characteristics of time series plots,
                    including Trend, Seasonality, Noise, Autocorellation, and Break Points. The characteristics were
                    visualised using matplotlib. </p>

                <Link className={"time_series_vis_link"}
                      to={"https://github.com/jacobhay2626/time_series_visualisation.git"} target={"_blank"}>Source
                    Code</Link>
            </div>


            <div className={"Trading_Engine_Server"}>
                <div>
                    {/*<img className={"csharp_image"} src={CSharp_IMG} alt={"cs"} width={90} height={100}/>*/}
                </div>
                <h2 className={"trading_engine_title"}> Trading Engine Server and Logging Library</h2>
                <p className={"trading_engine_description"}> Using C#, I developed a trading engine server with a
                    logging
                    library. During this project i learnt about important concepts such as dependency injection,
                    logging, hosting,
                    interfaces, and the trading engine class. I chose to write my own logging library as i felt it was a
                    challenge and i wanted it to be dependency injection friendly. </p>

                <Link className={"trading_link"} to={"https://github.com/jacobhay2626/TradingEngineServer_05-24.git"}
                      target={"_blank"}>Source
                    Code</Link>

            </div>


            <div className={"SMA_ML"}>
                <div className={"SMA_image"}>
                    {/*<img className={"sma_image"} src={NN_IMG} alt={"sma"} width={90} height={100}/>*/}
                </div>
                <h2 className={"sma_title"}> Machine Learning in Stock Market Analysis</h2>
                <p className={"sma_description"}> A research paper into how Machine Learning techniques, such as SVM,
                    MLFNN, STENN, PNN,
                    GRNN, FNN, and LSTM's, have progressed. Includes a literature review on past examples
                    where they have been used in stock market analysis , and a description of
                    the methodologies for each technique.</p>
                <Link to={'https://acrobat.adobe.com/id/urn:aaid:sc:EU:2fe9275b-787b-4ac0-8740-512b8b12e559'}
                      className={'sma_pdf'} target={"_blank"}> View Paper </Link>
            </div>


            <div className={"FFNN_Deriv"}>
                <div className={"FFNN_image"}>
                    {/*<img className={"ffnn_image"} src={NN_IMG} alt={"ffnn"} width={90} height={100}/>*/}
                </div>
                <h2 className={"ffnn_title"}> Mathematical Derivation of Feed-Forward Neural
                    Networks</h2>
                <p className={"ffnn_description"}>
                    A complete derivation of the mathematics behind feed-forward neural
                    networks including forward propagation, cost functions, and back
                    propagation </p>
                <Link to={'https://acrobat.adobe.com/id/urn:aaid:sc:EU:2d9171ea-7a74-4573-849b-e1f3d7756be7'}
                      className={'ffnn_pdf'} target={"_blank"}> View Paper</Link>
            </div>


            <div className={"NFT_Lottery"}>
                <div className={"NFT_Image_1"}>
                    {/*<img className={"nft_image_1"} src={NFT_IMG} alt={"nft"} width={90} height={100}/>*/}
                </div>
                <h2 className={"NFT_Title_1"}> NFT Lottery </h2>
                <p className={"NFT_Lottery_description"}>
                    A lottery for a random NFT that rewards a lucky winner!
                </p>
                <Link className={"NFT_Link_1"} to={"https://github.com/jacobhay2626/NFT_Lottery.git"} target={"_blank"}>Source
                    Code</Link>
            </div>


            <div className={"NFT_Basic"}>
                <div className={"NFT_Image_2"}>
                    {/*<img className={"nft_image_2"} src={NFT_IMG} alt={"nft"} width={90} height={100}/>*/}
                </div>
                <h2 className={"NFT_Title_2"}> NFT Contract </h2>
                <p className={"NFT_Basic_description"}>
                    A basic NFT contract that allows an individual to upload an NFT
                    using the images token URI
                </p>
                <Link className={"NFT_Link_2"} to={"https://github.com/jacobhay2626/Basic-NFT-.git"} target={"_blank"}>Source
                    Code</Link>
            </div>


            <div className={"NFT_website"}>
                <div className={"NFT_Image_3"}>
                    {/*<img className={"nft_image_3"} src={NFT_IMG} alt={"nft"} width={90} height={100}/>*/}
                </div>
                <h2 className={"NFT_Title_3"}> Coastal Seasons A.I. </h2>
                <p className={"NFT_Website_description"}>
                    A website I developed for an NFT project last year. Used AI tools to
                    generate NFTs, marketed the collection on social media, and used this
                    website to sell the NFTs.
                </p>
                <Link className={"NFT_Link_3"} to={"https://github.com/jacobhay2626/CoastalSeasons_AI.git"}
                      target={"_blank"}>Source
                    Code</Link>
            </div>


            {/*<div className={"ML_Python_cert"}>*/}
            {/*    <div className={"Cert_Image_1"}>*/}
            {/*        /!*<img className={"cert_image_1"} src={CERT_IMG} alt={"cert"} width={90} height={100}/>*!/*/}
            {/*    </div>*/}
            {/*    <h2 className={"Cert_Title_1"}> Machine Learning with Python </h2>*/}
            {/*    <p className={"Cert_1_description"}>*/}
            {/*        Online course authorised by IBM including the deployment of machine*/}
            {/*        learning algorithms, implementing supervised and unsupervised machine*/}
            {/*        learning models using SciPy and ScikitLearn, and building deep learning*/}
            {/*        models using Keras, PyTorch, and TensorFlow.*/}
            {/*    </p>*/}
            {/*    <Link to={'https://acrobat.adobe.com/id/urn:aaid:sc:EU:7d6da147-575d-4d3b-87e5-9af10d15b12b'}*/}
            {/*          className={"ML_pyth_pdf"} target={"_blank"}> View Certificate </Link>*/}
            {/*</div>*/}


            {/*<div className={"NN_DL_Cert"}>*/}
            {/*    <div className={"Cert_Image_2"}>*/}
            {/*        /!*<img className={"cert_image_2"} src={CERT_IMG} alt={"cert"} width={90} height={100}/>*!/*/}
            {/*    </div>*/}
            {/*    <h2 className={"Cert_Title_2"}> Neural Networks and Deep Learning </h2>*/}
            {/*    <p className={"Cert_2_description"}>*/}
            {/*        Foundational concepts of neural networks and deep learning, along with*/}
            {/*        implementing efficient, vectorized, neural networks.*/}
            {/*    </p>*/}

            {/*    <Link to={'https://acrobat.adobe.com/id/urn:aaid:sc:EU:baa45193-4918-47f5-820e-aea46e7e7bb1'}*/}
            {/*          className={"NN_DL_pdf"} target={"_blank"}> View Certificate </Link>*/}
            {/*</div>*/}


            {/*<div className={"Math_ML_cert"}>*/}
            {/*    <div className={"Cert_Image_3"}>*/}
            {/*        /!*<img className={"cert_image_3"} src={CERT_IMG} alt={"cert"} width={90} height={100}/>*!/*/}
            {/*    </div>*/}
            {/*    <h2 className={"Cert_Title_3"}> Mathematics for Machine Learning*/}
            {/*        Specialization </h2>*/}
            {/*    <p className={"Cert_3_description"}>*/}
            {/*        A three course specialization including: 'Linear ALgrebra for Machine Learning*/}
            {/*        and Data Science', 'Calculus for Machine Learning and Data Science', and 'Probability*/}
            {/*        & Statistics for Machine Learning and Data Science'.*/}
            {/*    </p>*/}
            {/*    <Link to={'https://acrobat.adobe.com/id/urn:aaid:sc:EU:a7d01b2a-9c77-4790-9a90-03bc661d5a59'}*/}
            {/*          className={"Math_ML_pdf"} target={"_blank"}> View Certificate </Link>*/}
            {/*</div>*/}

            <div className={"Masters_Proj"}>
                <div className={"Nott_Image"}>
                    {/*<img className={"nott_image"} src={NOTT_IMG} alt={"masters"} width={90} height={100}/>*/}
                </div>
                <h2 className={"Masters_Title"}> Labelling solvents using green chemistry
                    principles </h2>
                <p className={"Masters_description"}>
                    A collection of classification and regression machine learning models built to predict a score of
                    recommended, problematic, or hazardous for a dataset of solvents used in industry. The models were
                    then tested on an external dataset using a new set of solvents common in industry.
                </p>
                <Link to={'https://acrobat.adobe.com/id/urn:aaid:sc:EU:307b0b38-6ac2-43be-9b99-0ee8241db82e'}
                      className={'masters_pdf'} target={"_blank"}> View Paper </Link>
                <Link className={"masters_code"} to={"https://github.com/jacobhay2626/MSci_Project_Sustainability.git"}
                      target={"_blank"}>
                    Source Code
                </Link>
            </div>

        </div>
    )
}

export default Portfolio;