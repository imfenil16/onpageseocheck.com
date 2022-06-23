import React from "react";
import { useRouter } from "next/router";

const Scrap = ({ result }) => {
    const router = useRouter();
    const { url } = router.query;
    if (typeof window !== "undefined") {
        var width = window.innerWidth;
    }

    return (
        <>
            <h1 className="text-4xl mt-5 text-center">On-page SEO analysis result</h1>
            {
                width > 768 ? (
                    <h3 className="w-screen lg:w-full text-2xl mt-2 mb-5 text-center">
                        Entered URL:- <a className="text-blue-700 cursor-pointer" href={url} target="_blank" rel="noopener noreferrer">{url}</a></h3>
                ) : (
                    <div></div>
                )
            }


            <div className="flex flex-col justify-center items-center m-5 gap-5">

                <div style={{ backgroundColor: result.titleReview === "Title is length perfect!" ? "rgb(191 219 254)" : "#fed7aa" }} className='border rounded-md border-blue-700 shadow-blue-700 flex justify-items-start w-screen lg:w-full md:w-full h-fit lg:p-2'>
                    <div className="pl-5 pr-5 pt-2 flex flex-col items-center lg:w-40 w-32 ">
                        <h2 className="text-xl font-bold mb-2">Title</h2>
                        {result.titleReview === "Title is length perfect!" ?
                            <div className="fill-blue-700">
                                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z" /></svg>
                            </div> :
                            <div className="fill-orange-700">
                                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z" /></svg>
                            </div>}
                    </div>

                    <div className='m-1 font-normal text-lg'>
                        <h3><b>Title:-</b> {result.titleData}</h3>
                        <h3><b>Review:-</b> {result.titleReview}</h3>
                        <h3><b>Length:-</b> {result.titleLength} Characters</h3>
                    </div>
                </div>



                <div style={{ backgroundColor: result.metaDesReview === "Meta description length is perfect!" ? "rgb(191 219 254)" : "#fed7aa" }} className='border rounded-md border-blue-700 shadow-blue-700 flex justify-items-start w-screen lg:w-full md:w-full h-fit lg:p-2'>
                    <div className="fill-blue-700">
                        <div className="pl-5 pr-5 pt-2 flex flex-col items-center lg:w-40 w-32">
                            <h2 className="text-xl font-bold mb-2">Description</h2>
                            {result.metaDesReview === "Meta description length is perfect!" ?
                                <div className="fill-blue-700">
                                    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z" /></svg>
                                </div> :
                                <div className="fill-orange-700">
                                    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z" /></svg>
                                </div>}
                        </div>
                    </div>
                    <div className='m-1 font-normal text-lg'>
                        <h3><b>Meta Description:-</b> {result.metaDes}</h3>
                        <h3><b>Review:-</b> {result.metaDesReview}</h3>
                        <h3><b>Length:-</b> {result.metaDesLength} Characters</h3>
                    </div>
                </div>



                <div style={{ backgroundColor: result.altTagReview === "Perfect! All images have alt tags!" ? "rgb(191 219 254)" : "#fed7aa" }} className='border rounded-md border-blue-700 shadow-blue-700 flex justify-items-start w-screen lg:w-full md:w-full h-fit lg:p-2'>
                    <div className="fill-blue-700">
                        <div className="pl-5 pr-5 pb-2 pt-2 flex flex-col items-center lg:w-40 w-32">
                            <h2 className="text-xl font-bold mb-1">Alt Tag</h2>
                            {result.altTagReview === "Perfect! All images have alt tags!" ?
                                <div className="fill-blue-700">
                                    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z" /></svg>
                                </div> :
                                <div className="fill-orange-700">
                                    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z" /></svg>
                                </div>}
                        </div>
                    </div>
                    <div className='m-1 font-normal text-lg'>
                        <h3><b>Total Images:-</b> {result.altTagsNumber} img tags in the page.</h3>
                        <h3><b>Review:-</b> {result.altTagReview}</h3>
                    </div>
                </div>



                <div style={{ backgroundColor: result.h1LengthReview === "Heading length is perfect!" ? "rgb(191 219 254)" : "#fed7aa" }} className='bg-blue-200 border rounded-md border-blue-700 shadow-blue-700 flex justify-items-start w-screen lg:w-full md:w-full h-fit lg:p-2'>
                    <div className="fill-blue-700">
                        <div className="pl-5 pr-7 pt-2 flex flex-col items-center lg:w-40 w-32">
                            <h2 className="text-xl font-bold mb-2">H1</h2>
                            {result.h1LengthReview === "Heading length is perfect!" ?
                                <div className="fill-blue-700">
                                    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z" /></svg>
                                </div> :
                                <div className="fill-orange-700">
                                    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z" /></svg>
                                </div>}
                        </div>
                    </div>
                    <div className='m-1 font-normal text-lg'>
                        <h3><b>H1:-</b> {result.listh1 === "No H1 content in the page." ? "No H1 content in the page." : result.listh1[0]}</h3>
                        <h3><b>Length:-</b> {result.h1LengthReview}</h3>
                        <h3><b>Review:-</b> {result.h1Review}</h3>
                    </div>
                </div>
            </div>
        </>

    );
};

export async function getServerSideProps({ req, res }) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    );

    var url = req.url.split("=")[1];
    const decodedPath = decodeURIComponent(url);
    url = decodedPath;
    if (!(decodedPath.includes("http://") || decodedPath.includes("https://"))) {
        url = "https://" + decodedPath;
    }
    if (decodedPath.includes("www.")) {
        url = url.replace("www.", "");
    }
    const axios = require("axios");
    const cheerio = require("cheerio");
    try {
        // Fetch HTML of the page we want to scrape
        const { data } = await axios.get(url);
        // Load HTML we fetched in the previous line
        const $ = cheerio.load(data);



        // Page title 
        var title = $("title");
        var titleData = title.text();
        var titleLength = title.text().length;
        var titleReview;
        if (titleLength > 60) {
            titleReview = "Title is longer than it should be";
        } else if (titleLength < 60 && titleLength > 40) {
            titleReview = "Title is length perfect!";
        } else {
            titleReview = "Title is too short";
        }



        // Meta description
        var metaDes = $(`meta[name='description']`).attr("content");
        if (metaDes === undefined) {
            var metaDes = $(`meta[name='Description']`).attr("content");
        }
        var metaDesReview;
        var metaDesLength = metaDes.length;
        if (metaDesLength >= 0) {
            if (metaDesLength > 160) {
                metaDesReview = "Meta description is longer than it should be.";
            } else if (metaDesLength < 160 && metaDesLength > 120) {
                metaDesReview = "Meta description length is perfect!";
            } else {
                metaDesReview = "Meta description is short.";
            }
        }
        else {
            metaDesReview = "No meta description in the page.";
        }



        // Alter Tag 
        var altTags = $("img");
        var altTagsNumber = altTags.length;
        var altText = [];
        var imgWithAltTags = altTagsNumber;
        var altTagReview;
        altTags.each((i, el) => {
            var altTagData = $(el).attr("alt");
            altText.push(altTagData);
            if (altTagData === undefined) {
                imgWithAltTags--;
            }
        })
        if (imgWithAltTags === altTagsNumber) {
            altTagReview = "Perfect! All images have alt tags!";
        }
        else {
            altTagReview = `${imgWithAltTags}/${altTagsNumber} images have alt tags`;
        }



        // Heading H1
        var h1s = $("h1");
        var listh1 = [];
        var h1Review;
        var h1LengthReview;
        // var headingTextDatah1 = [];
        h1s.each((i, el) => {
            // Store the heading text in a variable
            const headingText = $(el).text();
            // Store the heading text in the data array
            listh1.push(headingText);
            if (listh1.length > 1) {
                h1Review = "There should be only one h1 tag in the page.";
            }
            else {
                h1Review = "Perfect! There is only one h1 tag in the page.";
            }

            if (headingText.length > 20 && headingText.length < 70) {
                h1LengthReview = "Heading length is perfect!";
            } else if (headingText.length < 20) {
                h1LengthReview = "Heading length is short";
            } else {
                h1LengthReview = "Heading length is long";
            }
        });

    } catch (err) {
        console.error(err);
    }


    return {
        props: {
            result: {
                titleData: titleData === undefined ? 'No title tag in the page.' : titleData,
                titleReview: titleReview === undefined ? 'No title available.' : titleReview,
                titleLength: titleLength === undefined ? '0' : titleLength,


                metaDes: metaDes === undefined ? 'No meta description tag in the page.' : metaDes,
                metaDesReview: metaDesReview === undefined ? 'No meta description available.' : metaDesReview,
                metaDesLength: metaDesLength === undefined ? '0' : metaDesLength,


                altTagsNumber: altTagsNumber === undefined ? 'No' : altTagsNumber,
                altTagReview: altTagReview === undefined ? 'No alter attribute available.' : altTagReview,


                h1Review: h1Review === undefined ? 'There are no H1 tag in the page.' : h1Review,
                h1LengthReview: h1LengthReview === undefined ? '0 Characters' : h1LengthReview,
                listh1: listh1 === undefined ? 'No H1 content in the page.' : listh1,
            }
        }
    };
}

export default Scrap;