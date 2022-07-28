var respecConfig = {
	// embed RDFa data in the output
	trace:  true,
	useExperimentalStyles: true,
	doRDFa: '1.1',
	includePermalinks: true,
	permalinkEdge:     true,
	permalinkHide:     false,
	noRecTrack: true,
	tocIntroductory: true,
	// specification status (e.g., WD, LC, NOTE, etc.). If in doubt use CG-DRAFT.
	subtitle: "Technological Considerations at the Edge",
	specStatus:           "CG-DRAFT",
	//crEnd:                "",
	//perEnd:               "",
	diffTool:             "http://www.aptest.com/standards/htmldiff/htmldiff.pl",
	
	// the specifications short name, as in https://www.w3.org/TR/short-name/
	shortName:            "a11yedge",
	
	
	// if you wish the publication date to be other than today, set this
	//publishDate:  "2014-12-11",
	copyrightStart:  "2022",
	license: "w3c-software-doc",
	
	// if there is a previously published draft, uncomment this and set its YYYY-MM-DD date
	// and its maturity status
	previousPublishDate:  "",
	// previousMaturity:  "CG-DRAFT",
	//prevRecURI: "",
	//previousDiffURI: "",
	
	// if there a publicly available Editors Draft, this is the link
	
	// if this is a LCWD, uncomment and set the end of its review period
	
	// editors, add as many as you like
	// only "name" is required
	editors: [
		{
			name: "Janina Sajka",
			url: "http://rednote.net/",
			w3cid: 33688
		}
],
	
	authors:		[
	// authors, add as many as you like.
	// This is optional, uncomment if you have authors as well as editors.
	// only "name" is required. Same format as editors.
	
	//authors:  [
	//    { name: "Your Name", url: "http://example.org/",
	//      company: "Your Company", companyURI: "http://example.com/" },
	//],
	
		{
		      name: "Lionel Wolberger",
			          company: "Userway",
				        companyURL: "https://userway.org/",
					      mailto: "lionel@userway.org",
					            w3cid: 106386
							        },
	                {
				                        name: "Janina Sajka",
				                        url: "http://rednote.net/",
				                        w3cid: 33688
				                }
	],
	
	// errata: 'https://www.w3.org/2010/02/rdfa/errata.html',
	
	// name of the WG
	group:           "a11yedge",
	maxTocLevel: 3,
	
};

