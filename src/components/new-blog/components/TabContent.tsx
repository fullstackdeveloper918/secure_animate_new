import type React from 'react';
import Button from './Button';

interface TabContentProps {
  title: string;
  description: string;
  isActive: boolean;
  index: number;
}

const handleOrderClick = () => {
  // Handle order button click
  console.log('Order button clicked');
};

const TabContent: React.FC<TabContentProps> = ({ title, description, isActive, index }) => {
  return (
    <div className={`tabs_let-content ${isActive ? 'is-1' : ''}`}>
      <div className='headercontent'>
      <h2
        className="heading-style-h4 text-color-gray100"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h2>
      <div className="tabs_line"></div>
      <p
        className="text-size-small text-color-gray400"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
</div>
      <div className="tabs_left-bottom">
        <Button text="blogs" onClick={handleOrderClick} />
      </div>
    </div>
  );
};

export default TabContent;
