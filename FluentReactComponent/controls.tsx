import * as React from 'react';
import { Card, ICardTokens, ICardSectionStyles, ICardSectionTokens } from '@uifabric/react-cards';
import { FontWeights } from '@uifabric/styling';
import { initializeIcons } from '@uifabric/icons';
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';
import { Icon, IIconStyles, Image, Stack, IStackTokens, Text, ITextStyles, Panel } from 'office-ui-fabric-react';
// import React from 'react';
import swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faBars, faCoffee } from '@fortawesome/free-solid-svg-icons';

initializeIcons();

library.add( fab, faBars, faCheckSquare, faCoffee);

const alertClicked = (): void => {
  // alert("this is a cliked alert!");
  swal.fire('this is a click alert!');
};
export interface IFluent{
  test?:string;
  testChange?:(newValue:string) =>void;
}
export class CardHorizontalExample extends React.Component<IFluent> {
  constructor(props:IFluent){
    super(props);
    console.log(props.test);
  }
  public render(): JSX.Element {
    const siteTextStyles: ITextStyles = {
      root: {
        color: '#025F52',
        fontWeight: FontWeights.semibold,
      },
    };
    const descriptionTextStyles: ITextStyles = {
      root: {
        color: '#000000',
        fontWeight: FontWeights.regular,
      },
    };
    const helpfulTextStyles: ITextStyles = {
      root: {
        color: '#333333',
        fontWeight: FontWeights.regular,
      },
    };
    const iconStyles: IIconStyles = {
      root: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: FontWeights.regular,
      },
    };
    const footerCardSectionStyles: ICardSectionStyles = {
      root: {
        alignSelf: 'stretch',
        borderLeft: '1px solid #F3F2F1',
      },
    };

    const sectionStackTokens: IStackTokens = { childrenGap: 20 };
    const cardTokens: ICardTokens = { childrenMargin: 12 };
    const footerCardSectionTokens: ICardSectionTokens = { padding: '0px 0px 0px 12px' };
    //异步加载地图库函数文件
    function loadScript() {
      //创建script标签
      var script = document.createElement("script");
      //设置标签的type属性
      script.type = "text/javascript";
      //设置标签的链接地址
      script.src = "https://map.qq.com/api/js?v=2.exp&key=DUGBZ-Y6JKG-7EYQ3-IDNGB-OYLPF-ALBXX&callback=init";
      //添加标签到dom
      document.body.appendChild(script);
    }
    

    return (
      <Stack tokens={sectionStackTokens} onLoad={loadScript}>
        <Card aria-label="Basic horizontal card" horizontal tokens={cardTokens}>
          <Card.Item>
    <Text>Basic horizontal card {this.props.test}</Text>
          </Card.Item>
        </Card>

        <Card aria-label="Clickable horizontal card " horizontal onClick={alertClicked} tokens={cardTokens}>
          <Card.Item fill>
            <Image src="https://placehold.it/180x135" alt="Placeholder image." />
          </Card.Item>
          <Card.Section>
            <Text variant="small" styles={siteTextStyles}>
              Contobucks
            </Text>
            <Text styles={descriptionTextStyles}>Contoso Denver expansion design marketing hero guidelines</Text>
            <Text variant="small" styles={helpfulTextStyles}>
              Is this recommendation helpful?
            </Text>
          </Card.Section>
          <Card.Section styles={footerCardSectionStyles} tokens={footerCardSectionTokens}>
            <FontIcon iconName="CompassNW" />
            <FontIcon iconName="Dictionary"/>
            <Stack.Item grow={1}>
              <span />
            </Stack.Item>
            <FontIcon iconName="Home" />
            <FontAwesomeIcon icon={faBars} />
          </Card.Section>
        </Card>
        
        <Card aria-label="Basic horizontal card" horizontal tokens={cardTokens}>
          <Card.Item>
            <Text> Popular gadgets come from vendors like:</Text>
            <FontAwesomeIcon icon={['fab', 'apple']} />
            <span> </span>
            <FontAwesomeIcon icon={['fab', 'microsoft']} />
            <FontAwesomeIcon icon={['fab', 'google']} />
            <FontAwesomeIcon icon={['fab', 'facebook']} />
          </Card.Item>
        </Card>
        <iframe src="~/Html/Maps.html" />
        
      </Stack>
  
    );
  }
}