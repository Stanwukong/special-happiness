import React from "react"
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

import { Div3, SocialIcons } from "../Header/HeaderStyles"
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles"

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:0813-695-8369">0813-695-8369</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:contact@stanleyajanaku@gmail.com">
            stanleyajanaku@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>No go relent.</Slogan>
        </CompanyContainer>
		<Div3>
		<SocialIcons href="https://github.com/stanwukong">
          <AiFillGithub size="2.5rem" />
        </SocialIcons>
        <SocialIcons href="https://linkedin.com/stanwukong">
          <AiFillLinkedin size="2.5rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com/not_femi">
          <AiFillInstagram size="2.5rem" />
        </SocialIcons>
		</Div3>
      </SocialIconsContainer>
    </FooterWrapper>
  )
}

export default Footer
