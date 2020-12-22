import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import styled from 'styled-components';

const Text = styled.div`
padding: 0.5em 1em;
color: #232323;
background: #F5F5F5;
> p {
  margin-top: 2em; 
  padding: 0;
  }
`

const Img = styled.a`
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
export const HomePageTemplate = ({ title, subtitle, featuredImage, body }) => (

  
  <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        {/* <Content source={body} /> */}
        <SubTitle>News</SubTitle>
        <Text>
          <p>2020年12月10日会社設立</p>
      　</Text>   
        <SubTitle>Concept</SubTitle>
        <Text>
          <p>エンジニアの普通これくらい分かるだろうは世間には通用しない！<br/>
          私たちUmuは目線を普通の生活者に寄せ、誰にでも分かりやすいデザインを提供することを心がけています。</p>
      　</Text>        
        <SubTitle>Design</SubTitle>
        <Img><img src="https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/resize/800x/" srcset="https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/320x320/-/quality/lightest/320.jpg 320w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/450x450/-/quality/lightest/450.jpg 450w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/640x640/-/quality/lightest/640.jpg 640w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/750x750/-/quality/lightest/750.jpg 750w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/800x800/-/quality/lightest/800.jpg 800w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/900x900/-/quality/lightest/900.jpg 900w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/1000x1000/-/quality/lightest/1000.jpg 1000w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/1200x1200/-/quality/lightest/1200.jpg 1200w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/1500x1500/-/quality/lightest/1500.jpg 1500w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/1600x1600/-/quality/lightest/1600.jpg 1600w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/2000x2000/-/quality/lightest/2000.jpg"></img></Img>
        <Img><img src="https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/resize/800x/" srcset="https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/320x320/-/quality/lightest/320.jpg 320w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/450x450/-/quality/lightest/450.jpg 450w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/640x640/-/quality/lightest/640.jpg 640w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/750x750/-/quality/lightest/750.jpg 750w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/800x800/-/quality/lightest/800.jpg 800w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/900x900/-/quality/lightest/900.jpg 900w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/1000x1000/-/quality/lightest/1000.jpg 1000w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/1200x1200/-/quality/lightest/1200.jpg 1200w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/1500x1500/-/quality/lightest/1500.jpg 1500w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/1600x1600/-/quality/lightest/1600.jpg 1600w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/2000x2000/-/quality/lightest/2000.jpg"></img></Img>
        <Img><img src="https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/resize/800x/" srcset="https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/320x320/-/quality/lightest/320.jpg 320w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/450x450/-/quality/lightest/450.jpg 450w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/640x640/-/quality/lightest/640.jpg 640w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/750x750/-/quality/lightest/750.jpg 750w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/800x800/-/quality/lightest/800.jpg 800w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/900x900/-/quality/lightest/900.jpg 900w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/1000x1000/-/quality/lightest/1000.jpg 1000w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/1200x1200/-/quality/lightest/1200.jpg 1200w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/1500x1500/-/quality/lightest/1500.jpg 1500w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/1600x1600/-/quality/lightest/1600.jpg 1600w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/2000x2000/-/quality/lightest/2000.jpg"></img></Img>
      <SubTitle>Ceo.村上 奈々</SubTitle>
      <Img><img src="https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/resize/800x/" srcset="https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/320x320/-/quality/lightest/320.jpg 320w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/450x450/-/quality/lightest/450.jpg 450w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/640x640/-/quality/lightest/640.jpg 640w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/750x750/-/quality/lightest/750.jpg 750w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/800x800/-/quality/lightest/800.jpg 800w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/900x900/-/quality/lightest/900.jpg 900w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/1000x1000/-/quality/lightest/1000.jpg 1000w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/1200x1200/-/quality/lightest/1200.jpg 1200w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/1500x1500/-/quality/lightest/1500.jpg 1500w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/1600x1600/-/quality/lightest/1600.jpg 1600w,https://ucarecdn.com/277cdf82-24aa-4d80-8169-bb46f4cd319d/-/progressive/yes/-/format/auto/-/preview/2000x2000/-/quality/lightest/2000.jpg"></img></Img>
        <Text>
          <p>オーストラリア（パース）</p>
          ブラインドタッチすら出来ないOL時代に雪山でSEに出会い、プログラミングに興味をもつ<br/>
          友人の影響で海外に興味をもちオーストラリア（パース）へ<br/>
          30万で出国し、デミペアとして住込みベビーシッターを行う<br/>
          ホストファーザーが凄腕SEで（7歳からプログラミングをやっている）プログラミングを教えてもらう<br/>
          ホストマザーが育児ノイローゼになり追い出される<br/>
          ホストファーザーの計いで、家の前のキャラバンで2週間ほど生活する<br/>
          日本人とインド人夫婦が運営しているシェアハウスに移り住みオーナーが率いる地域の配達員としてスケボーでチラシ配りをする
          <br/>（スケボーが上達）<br/>
          インドカレーの美味しさに感動する<br/>
          奥さんが日本から弟子を取るほどのスピリチュアル先生で色々と教示してもらう（あまり覚えてない）<br/>
          時間があるのでプログラミングや英語や経営の勉強する<br/>
          知人から誘われ成り行きでホリエモン達とプライベートジェットでニュージーランドに行く<br/>
          安定してくるとつまらなくなり、そろそろ帰りたいがそのまま帰国日まで楽しく過ごす<br/>
          <p>中居（箱根）</p>
          仲居頭がとにかく怖い<br/>
          仕事ができず叱られまくり心折れる<br/>
          <p>寿司屋（北海道ニセコ)</p>
          中居のおかげで仕事が余裕になことに気づき感謝する<br/>
          外国人アルバイトばかりの隣のカフェに飛び込み営業したら面接受かる<br/>
          日本人と外国人での職場の雰囲気の違いに驚く<br/>
          いつか海外で働きたいと漠然と思う<br/>
          <p>SE</p>
          JAVAの研修をスタート（しばらくして完全に心折れる）<br/>
          折れつつもなんとか研修を最後まで終え、現場に出向<br/>
          上長がベテランSEで何かと厳しい、、、何故か仲居頭を思い出す<br/>
          上長が書いたソースコードに感動し、慕っていたら色々教えてくれるように<br/>
          JAVAできないなら意味ないと営業から現場変更を提案され、半年で退場<br/>
      　</Text>
      <SubTitle>Future</SubTitle>
        <Text>
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
      }
    }
  }
`
