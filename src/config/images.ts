/**
 * WEBSITE IMAGE CONFIGURATION
 * 
 * This file contains all image URLs used throughout the Talent PayMaster website.
 * To change any image, simply replace the URL with your own image URL.
 * 
 * IMAGE URL FORMAT:
 * - Use full URLs: "https://yourdomain.com/path/to/image.jpg"
 * - Or relative paths: "/images/your-image.jpg"
 * 
 * RECOMMENDED IMAGE SIZES:
 * - Hero images: 1920x1080px or larger
 * - Feature cards: 800x600px
 * - Logos: 400x200px (transparent PNG recommended)
 * - Portrait images: 600x800px
 */

export const images = {
    // ============================================
    // CLIENT LOGOS (Logo Banner on Home Page)
    // ============================================
    // Replace these placeholder URLs with your actual logo files
    // Recommended: Use transparent PNG files, approximately 200-400px wide
    clientLogos: {
      historyChannel: "/logos/history.png",
      investigationDiscovery: "/logos/id.png",
      discoveryChannel: "/logos/discovery.png",
      nfl: "/logos/nfl.png",
      tlc: "/logos/tlc.png",
      nationalGeographic: "/logos/natgeo.png",
    },
  
    // ============================================
    // HOME PAGE IMAGES
    // ============================================
    home: {
      // Full-screen hero background image
      // Recommended size: 1920x1080px or larger
      heroBackground: "https://images.unsplash.com/photo-1485846234645-a62644f84728?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBmaWxtJTIwcHJvZHVjdGlvbiUyMGRyYW1hdGljfGVufDF8fHx8MTc4Mzk3NDQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      
      // Portal feature cards (horizontal scroll section)
      portalInstantEstimates: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2UlMjBzY3JlZW58ZW58MXx8fHwxNzgzODc1Mzk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      portalFastPayments: "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzgzOTczOTkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      portalTeamManagement: "https://images.unsplash.com/photo-1668706971199-37e30a4e6298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xpdGljYWwlMjBjYW1wYWlnbiUyMHN0cmF0ZWd5fGVufDF8fHx8MTc4Mzk3MDg4MXww&ixlib=rb-4.1.0&q=80&w=1080",
      portalAutoCompliance: "https://images.unsplash.com/photo-1683481669762-90b3800049b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWVyaWNhbiUyMGZsYWclMjBhYnN0cmFjdHxlbnwxfHx8fDE3ODM5NzM5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  
    // ============================================
    // PORTAL PAGE IMAGES
    // ============================================
    portal: {
      heroBackground: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBtb2Rlcm58ZW58MXx8fHwxNzgzOTczOTk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      
      featureEstimates: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2UlMjBzY3JlZW58ZW58MXx8fHwxNzgzODc1Mzk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      featureInvoicing: "https://images.unsplash.com/photo-1554224311-beee4ac5c5c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRvY3VtZW50cyUyMG1vZGVybnxlbnwxfHx8fDE3ODM5NzM5OTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      featureCompliance: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBsYW5uaW5nJTIwbW9kZXJufGVufDF8fHx8MTc4Mzk3Mzk5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      featureTeam: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1vZGVybnxlbnwxfHx8fDE3ODM5NzM5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  
    // ============================================
    // POLITICAL CONSULTANTS PAGE IMAGES
    // ============================================
    political: {
      heroBackground: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xpdGljYWwlMjBjYW1wYWlnbiUyMGRyYW1hdGljfGVufDF8fHx8MTc4Mzk3Mzk5OXww&ixlib=rb-4.1.0&q=80&w=1080",
      
      featureEstimates: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wYWlnbiUyMHN0cmF0ZWd5JTIwbWVldGluZ3xlbnwxfHx8fDE3ODM5NzQwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      featureCompliance: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmclMjBhYnN0cmFjdHxlbnwxfHx8fDE3ODM5NzQwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      featureBilling: "https://images.unsplash.com/photo-1554224311-beee4ac5c5c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRvY3VtZW50cyUyMG1vZGVybnxlbnwxfHx8fDE3ODM5NzQwMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  
    // ============================================
    // NEW MEDIA & PRODUCTIONS PAGE IMAGES
    // ============================================
    newMedia: {
      heroBackground: "https://images.unsplash.com/photo-1485846234645-a62644f84728?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMGRyYW1hdGljfGVufDF8fHx8MTc4Mzk3NDAwNHww&ixlib=rb-4.1.0&q=80&w=1080",
      
      featurePayroll: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwY3JldyUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzgzOTc0MDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      featureCompliance: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwc2V0JTIwZXF1aXBtZW50fGVufDF8fHx8MTc4Mzk3NDAwNnww&ixlib=rb-4.1.0&q=80&w=1080",
      featureEstimates: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkaW8lMjBwcm9kdWN0aW9uJTIwbGlnaHRpbmd8ZW58MXx8fHwxNzgzOTc0MDA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  
    // ============================================
    // AGENTS & TALENT PAGE IMAGES
    // ============================================
    agents: {
      heroBackground: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwZXJmb3JtZXIlMjBkcmFtYXRpY3xlbnwxfHx8fDE3ODM5NzQwMDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      
      featurePayments: "https://images.unsplash.com/photo-1556742111-a301076d9d18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3ODM5NzQwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      featureContracts: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250cmFjdCUyMGRvY3VtZW50JTIwc2lnbmluZ3xlbnwxfHx8fDE3ODM5NzQwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      featureCompliance: "https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzgzOTc0MDEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  
    // ============================================
    // ABOUT PAGE IMAGES
    // ============================================
    about: {
      heroBackground: "https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzgzOTc0MDE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      
      timeline1986: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwb2ZmaWNlJTIwMTk4MHN8ZW58MXx8fHwxNzgzOTc0MDE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      timeline1990s: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0ZWNobm9sb2d5JTIwMTk5MHN8ZW58MXx8fHwxNzgzOTc0MDE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      timeline2020s: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzgzOTc0MDE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  
    // ============================================
    // CONTACT PAGE IMAGES
    // ============================================
    contact: {
      heroBackground: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwdXMlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzgzOTc0MDE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  };
  
  // Default export for easy importing
  export default images;
