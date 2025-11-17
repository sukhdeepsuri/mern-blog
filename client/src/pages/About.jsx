export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            Meet Our Team
          </h1>
          <div className='flex flex-wrap justify-center gap-6'>
            {teamMembers.map((member, index) => (
              <div key={index} className='flex flex-col items-center'>
                <img
                  src={member.photo}
                  alt={member.name}
                  className='w-24 h-24 rounded-full mb-3'
                />
                <h2 className='text-lg font-semibold'>{member.name}</h2>
                <p className='text-md text-gray-500'>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const teamMembers = [
  {
    name: 'Sukhdeep Suri',
    role: 'Team Lead',
    photo: 'https://res-console.cloudinary.com/dm1ndkfmt/thumbnails/v1/image/upload/v1732818546/bmV3UGhvdG9feG95ZmZ4/drilldown',
  },
  {
    name: 'Yash Nitin Patil',
    role: 'Team Member',
    photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fstylish-man-flat-vector-profile-picture-ai-generated_606187-309.jpg&f=1&nofb=1&ipt=314495539e530d38546a1aa62de1514d3ee0ad1f44293948ddd9cccce74655ad&ipo=images',
  },
  {
    name: 'Harshvardhan Sharma',
    role: 'Team Member',
    photo: 'https://res-console.cloudinary.com/dm1ndkfmt/thumbnails/v1/image/upload/v1732818546/bmV3UGhvdG9feG95ZmZ4/drilldown',
  },
];