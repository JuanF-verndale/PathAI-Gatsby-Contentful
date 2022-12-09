import React from 'react';
import styled, {css} from 'styled-components';
import { media } from '../styles/media';
import { RichText } from '../components/RichText';
import { SideDecorationBackground } from '../components/SideDecorationBackground';
import { CTALink } from '../components/CTALink';

interface ITabbedImageCallout{
    tabHeadings: Array<TabHeadings>;
}

type TabHeadings = {
    animatedImage: {
        url: string;
        height: string;
        width: string;
        title: string;
    };
    title: {
        raw: string;
    };
    description: {
        raw: string;
    };
    ctaLink: Array<CTALink>;
};

type CTALink = {
    title:string;
    url:string;
    element:string;
}

