import React from 'react'
import {
  TokenPairImage as UIKitTokenPairImage,
  TokenPairImageProps as UIKitTokenPairImageProps,
  TokenImage as UIKitTokenImage,
  ImageProps,
} from 'uikit'
import tokens from 'config/constants/tokens'
import { Token } from 'config/constants/types'
import { getAddress } from 'utils/addressHelpers'

interface TokenPairImageProps extends Omit<UIKitTokenPairImageProps, 'primarySrc' | 'secondarySrc'> {
  primaryToken: Token
  secondaryToken: Token
}

const getImageUrlFromToken = (token: Token, token2?: Token, isPool?: any) => {
  const address = getAddress(token.symbol === 'RNA' ? tokens.wbnb.address : token.address)
  const firstUrl = token.symbol === 'RNA' ? 'WRNA' : token.symbol
  if(isPool){
    return `/images/stake/${token2.symbol}.png`
  }
  return `/images/farms/${firstUrl}-${token2.symbol}.png`
}

export const TokenPairImage: React.FC<TokenPairImageProps> = ({ primaryToken, secondaryToken, isPool, ...props }) => {
  return (
    <UIKitTokenPairImage
      primarySrc={getImageUrlFromToken(primaryToken, secondaryToken, isPool)}
      secondarySrc={getImageUrlFromToken(secondaryToken, secondaryToken)}
      {...props}
    />
  )
}

interface TokenImageProps extends ImageProps {
  token: Token;
}

export const TokenImage: React.FC<TokenImageProps> = ({ token, ...props }) => {
  return <UIKitTokenImage src={getImageUrlFromToken(token)} {...props} />
}
