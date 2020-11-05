import React from "react";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import CustomTabs from "../../components/CustomTabs/CustomTabs";
import GalleryTabPanel  from './components/Tabpanels/GalleryTabpanel';
import GalleryTypeTabPanel  from './components/Tabpanels/GalleryTypeTabpanel';
import ImageIcon from '@material-ui/icons/Image';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';

function Gallery() {


    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <CustomTabs
                        title="Gallery:"
                        headerColor="rose"
                        tabs={[
                            {
                                tabName: "Gallery",
                                tabIcon: ImageIcon,
                                tabContent: (
                                    <GalleryTabPanel />
                                )
                            },
                            // {
                            //     tabName: "Gallery Type",
                            //     tabIcon: PhotoLibraryIcon,
                            //     tabContent: (
                            //         <GalleryTypeTabPanel/>
                            //     )
                            // }
                        ]}
                    />
                </GridItem>
            </GridContainer>
        </div>
    );
}

export default Gallery;