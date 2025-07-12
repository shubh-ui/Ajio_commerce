import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full' | 'fit';
  padding?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  maxWidth = '7xl',
  padding = 'lg'
}) => {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
    full: 'max-w-full',
    fit:'max-w-[100rem]'
  };

  const paddingClasses = {
    sm: 'px-4 sm:px-6',
    md: 'px-4 sm:px-6 lg:px-8',
    lg: 'px-4 sm:px-6 lg:px-8 xl:px-12',
    xl: 'px-4 sm:px-6 lg:px-8 xl:px-16',
    '2xl': 'px-4 sm:px-6 lg:px-8 xl:px-20'
  };

  return (
    <div 
      className={`
        ${maxWidthClasses[maxWidth]} 
        ${paddingClasses[padding]} 
        mx-auto 
        w-full 
        ${className}
      `.trim()}
    >
      {children}
    </div>
  );
};

export default Container;

// Usage Example:
// 
// import Container from './Container';
// 
// const MyPage = () => {
//   return (
//     <Container maxWidth="7xl" padding="lg">
//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//         {/* Your content here */}
//         <div className="lg:col-span-1">
//           {/* Sidebar content */}
//         </div>
//         <div className="lg:col-span-3">
//           {/* Main content */}
//         </div>
//       </div>
//     </Container>
//   );
// };
//
// // Or with custom styling:
// <Container 
//   maxWidth="6xl" 
//   padding="xl" 
//   className="bg-gray-50 min-h-screen"
// >
//   <YourComponent />
// </Container>