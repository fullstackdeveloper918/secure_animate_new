import React from 'react';
import Intro from './components/Intro';
import TabsSection from './components/TabsSection';

export const BlogSection = () => {
  return (
    <div className="app">
      <Intro />
      <TabsSection />
      {/* <div style={{ height: '50vh' }}></div> */}
    </div>
  );
};
