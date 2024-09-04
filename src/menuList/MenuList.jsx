import React from 'react';
import './menuList.css';
import flowerImg from "../logo.jpeg"; 

const categories = [
  { id: 'z', title: '12-Step Completion Process by Teal Swan', description: '' },
  { id: 'a', title: '1. Creating a Sense of Safety', description: 'Ensure that you are in a safe space, both physically and emotionally, before you begin.' },
  { id: 'b', title: '2. Presence and Mindfulness', description: 'Focus your attention on the present moment and acknowledge the emotional discomfort you are feeling.' },
  { id: 'c', title: 'Allowing the Feelings', description: 'Permit yourself to fully experience the emotional discomfort without suppressing or avoiding it.' },
  { id: 'd', title: 'Tracing Back', description: 'Mentally trace back to a past experience that may have triggered these feelings. Allow the memory to surface.' },
  { id: 'e', title: 'Re-experiencing the Memory', description: 'Relive the memory as if it is happening in the present moment. Pay attention to all the details and feel the emotions that were present at that time.' },
  { id: 'f', title: 'Expressing the Emotions', description: 'Give expression to the emotions that arise, whether through crying, screaming, or other forms of emotional release.' },
  { id: 'g', title: 'Connecting with the Inner Child', description: 'Imagine meeting your younger self (inner child) who experienced this trauma. Lovingly connect with this part of you.' },
  { id: 'h', title: 'Offering Understanding and Comfort', description: 'Provide your inner child with understanding, compassion, and comfort. Show them that they are safe and that you are there for them.' },
  { id: 'i', title: 'Gaining a New Perspective: ', description: 'Try to view the situation from a new, adult perspective and understand that you now have different resources to handle such situations.' },
  { id: 'j', title: 'Integrating the Trauma', description: 'Integrate the experience by recognizing that it is a part of your past, but it is now healed and does not define you.' },
  { id: 'l', title: 'Making Peace', description: 'Make peace with the situation and your younger self by bringing love and forgiveness into the process.' },
  { id: 'm', title: 'Closure and Returning to the Present', description: 'Gradually return to the present moment, acknowledge the work you have done, and feel grounded in your body and life once more.' },


];



const MenuList = () => {
  return (
    <div className="menu-card">
      <div className="scrollable-content">
      <img className="Logo" src={flowerImg} alt="Logo der Firma" />
        {categories.map((category) => (
          <div key={category.id} className="category-slide">
            <h1>{category.title}</h1>
            <p>{category.description}</p>
            
          </div>
        ))}
     
      </div>
    </div>
  );
};

export default MenuList;