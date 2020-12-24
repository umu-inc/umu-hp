import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import styled from 'styled-components';
import StepImage_03 from '../../static/images/myProfile.jpg';

const Text = styled.div`
padding: 0.5em 1em;
color: #232323;
background: #F5F5F5;
> p {
  margin-top: 2em; 
  padding: 0;
  }
`

const Img = styled.div`
  float: left;
  flex-direction: column;
  width: 23em;
  height: 18em;
  padding: 0.5em 1em;
  margin: 2em 0;
  color: #5d627b;
  background: white;
  border-top: solid 5px #5d627b;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
  img {
    width: 21em;
    height: 14em;
    margin-right: 2em;
    margin-bottom: 1em;
    }
  `

const SubTitle = styled.h2`
margin-top: 3em;
`

// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subtitle, featuredImage, body, news, concept, design, ceo, section1, section2 }) => (

  
  <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <SubTitle>{news}</SubTitle>
        <Text>
          <p>2020年12月10日会社設立</p>
      　</Text>   
        <SubTitle>{concept}</SubTitle>
        <Text>
          <p>{section1}<br/>{section2}</p>
      　</Text>        
        <SubTitle>{design}</SubTitle>
          <Img><img src="https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/resize/800x/" srcset="https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/320x320/-/quality/lightest/320.jpg 320w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/450x450/-/quality/lightest/450.jpg 450w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/640x640/-/quality/lightest/640.jpg 640w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/750x750/-/quality/lightest/750.jpg 750w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/800x800/-/quality/lightest/800.jpg 800w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/900x900/-/quality/lightest/900.jpg 900w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/1000x1000/-/quality/lightest/1000.jpg 1000w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/1200x1200/-/quality/lightest/1200.jpg 1200w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/1500x1500/-/quality/lightest/1500.jpg 1500w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/1600x1600/-/quality/lightest/1600.jpg 1600w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/2000x2000/-/quality/lightest/2000.jpg"></img></Img>
          <Img><img src="https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/resize/800x/" srcset="https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/320x320/-/quality/lightest/320.jpg 320w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/450x450/-/quality/lightest/450.jpg 450w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/640x640/-/quality/lightest/640.jpg 640w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/750x750/-/quality/lightest/750.jpg 750w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/800x800/-/quality/lightest/800.jpg 800w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/900x900/-/quality/lightest/900.jpg 900w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/1000x1000/-/quality/lightest/1000.jpg 1000w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/1200x1200/-/quality/lightest/1200.jpg 1200w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/1500x1500/-/quality/lightest/1500.jpg 1500w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/1600x1600/-/quality/lightest/1600.jpg 1600w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/2000x2000/-/quality/lightest/2000.jpg"></img></Img>
          <Img><img src="https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/resize/800x/" srcset="https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/320x320/-/quality/lightest/320.jpg 320w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/450x450/-/quality/lightest/450.jpg 450w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/640x640/-/quality/lightest/640.jpg 640w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/750x750/-/quality/lightest/750.jpg 750w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/800x800/-/quality/lightest/800.jpg 800w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/900x900/-/quality/lightest/900.jpg 900w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/1000x1000/-/quality/lightest/1000.jpg 1000w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/1200x1200/-/quality/lightest/1200.jpg 1200w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/1500x1500/-/quality/lightest/1500.jpg 1500w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/1600x1600/-/quality/lightest/1600.jpg 1600w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/2000x2000/-/quality/lightest/2000.jpg"></img></Img>
      <SubTitle>{ceo}</SubTitle>
      <Img><img src={StepImage_03}></img></Img>
        <Text>
          <p>{body}</p>
      　</Text>
      </div>
    </section>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
        news
        section1
        concept
        design
        ceo
        section2
      }
    }
  }
`
