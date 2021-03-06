import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

import BlockContent from '@sanity/block-content-to-react';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';

import Styles from './styles';
const useStyles = makeStyles(Styles);

const ArticleBodyBlockContent: FunctionComponent<ArticleBodyBlockContentProps> = ({
  data,
}) => {
  const classes = useStyles();

  return (
    <section className={classNames('c-richtext', classes.richText)}>
      <BlockContent
        blocks={data}
        serializers={blockTypeDefaultSerializers}
        className={'hello'}
      />
    </section>
  );
};

export default ArticleBodyBlockContent;

interface ArticleBodyBlockContentProps {
  data: any;
}
