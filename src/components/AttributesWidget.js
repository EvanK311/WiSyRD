import React from 'react';
import { Box, Button, Card, Heading, Text } from 'rebass';
import { Tiles } from '@rebass/layout';
import { Input, Label, Checkbox } from '@rebass/forms'
import Widget from './Widget';

// Usage: <ExampleWidget>Hello World!</ExampleWidget>
export default class AttributesWidget extends Widget {

    constructor(props){
        super(props);
        this.title = "Attributes Widget";
        this.widgetType = "example-widget"
    }

    renderPanel=()=> {
        return (<>
        <Box width={350}>

            {/* ================================================
                                Primary box styling
            ================================================ */}
                <Box
                    p={3}
                    width={1}
                    bg='purple'>
                        <Tiles columns={[2]}>
            {/* ================================================
                                    STR
            ================================================ */}
                            <Box
                                ml='auto'
                                px={1}
                                py={1}
                                bg='orange'
                                sx={{
                                    borderWidth: '3px',
                                    borderStyle: 'solid',
                                    borderColor: 'white',
                                    borderRadius: 8
                           }}>
                           <Text
                               bg='grey'
                               textAlign='center'
                               htmlFor='initiative'
                               fontSize={[3]}
                               fontWeight='bold'
                               color='black'
                               py={1}>Str
                            </Text>
                            <Text
                                textAlign='center'
                                fontSize={[5]}
                                fontWeight='bold'
                                color='black'
                                py={3}>
                                    +/- 0
                            </Text>
                                <Input
                                    textAlign='center'
                                    id='str'
                                    name='str'
                                    type='str'
                                    placeholder='10'
                                />
                            </Box>

            {/* ================================================
                                    Int
            ================================================ */}
                            <Box
                                ml='auto'
                                px={1}
                                py={1}
                                bg='orange'
                                sx={{
                                    borderWidth: '3px',
                                    borderStyle: 'solid',
                                    borderColor: 'white',
                                    borderRadius: 8
                           }}>
                           <Text
                               bg='grey'
                               textAlign='center'
                               htmlFor='initiative'
                               fontSize={[3]}
                               fontWeight='bold'
                               color='black'
                               py={1}>Int
                            </Text>
                            <Text
                                textAlign='center'
                                fontSize={[5]}
                                fontWeight='bold'
                                color='black'
                                py={3}>
                                    +/- 0
                            </Text>
                                <Input
                                    textAlign='center'
                                    id='str'
                                    name='str'
                                    type='str'
                                    placeholder='10'
                                />
                            </Box>

            {/* ================================================
                                    WIS
            ================================================ */}
                            <Box
                                ml='auto'
                                px={1}
                                py={1}
                                bg='orange'
                                sx={{
                                    borderWidth: '3px',
                                    borderStyle: 'solid',
                                    borderColor: 'white',
                                    borderRadius: 8
                           }}>
                           <Text
                               bg='grey'
                               textAlign='center'
                               htmlFor='initiative'
                               fontSize={[3]}
                               fontWeight='bold'
                               color='black'
                               py={1}>Wis
                            </Text>
                            <Text
                                textAlign='center'
                                fontSize={[5]}
                                fontWeight='bold'
                                color='black'
                                py={3}>
                                    +/- 0
                            </Text>
                                <Input
                                    textAlign='center'
                                    id='str'
                                    name='str'
                                    type='str'
                                    placeholder='10'
                                />
                            </Box>

            {/* ================================================
                                    DEX
            ================================================ */}
                            <Box
                                ml='auto'
                                px={1}
                                py={1}
                                bg='orange'
                                sx={{
                                    borderWidth: '3px',
                                    borderStyle: 'solid',
                                    borderColor: 'white',
                                    borderRadius: 8
                           }}>
                           <Text
                               bg='grey'
                               textAlign='center'
                               htmlFor='initiative'
                               fontSize={[3]}
                               fontWeight='bold'
                               color='black'
                               py={1}>Dex
                            </Text>
                            <Text
                                textAlign='center'
                                fontSize={[5]}
                                fontWeight='bold'
                                color='black'
                                py={3}>
                                    +/- 0
                            </Text>
                                <Input
                                    textAlign='center'
                                    id='str'
                                    name='str'
                                    type='str'
                                    placeholder='10'
                                />
                            </Box>

            {/* ================================================
                                    CHA
            ================================================ */}
                            <Box
                                ml='auto'
                                px={1}
                                py={1}
                                bg='orange'
                                sx={{
                                    borderWidth: '3px',
                                    borderStyle: 'solid',
                                    borderColor: 'white',
                                    borderRadius: 8
                           }}>
                           <Text
                               bg='grey'
                               textAlign='center'
                               htmlFor='initiative'
                               fontSize={[3]}
                               fontWeight='bold'
                               color='black'
                               py={1}>Cha
                            </Text>
                            <Text
                                textAlign='center'
                                fontSize={[5]}
                                fontWeight='bold'
                                color='black'
                                py={3}>
                                    +/- 0
                            </Text>
                                <Input
                                    textAlign='center'
                                    id='str'
                                    name='str'
                                    type='str'
                                    placeholder='10'
                                />
                            </Box>

            {/* ================================================
                                    CON
            ================================================ */}
                            <Box
                                ml='auto'
                                px={1}
                                py={1}
                                bg='orange'
                                sx={{
                                    borderWidth: '3px',
                                    borderStyle: 'solid',
                                    borderColor: 'white',
                                    borderRadius: 8
                           }}>
                           <Text
                               bg='grey'
                               textAlign='center'
                               htmlFor='initiative'
                               fontSize={[3]}
                               fontWeight='bold'
                               color='black'
                               py={1}>Con
                            </Text>
                            <Text
                                textAlign='center'
                                fontSize={[5]}
                                fontWeight='bold'
                                color='black'
                                py={3}>
                                    +/- 0
                            </Text>
                                <Input
                                    textAlign='center'
                                    id='str'
                                    name='str'
                                    type='str'
                                    placeholder='10'
                                />
                            </Box>

                        </Tiles>
                </Box>

                <Text>{this.props.children}</Text>
        </Box>
                
            </>
        )
    }
}