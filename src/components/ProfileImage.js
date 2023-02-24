const ProfileImage = (props) => {
    const { image } = props;
    return (<img src={image} className= "profileImage" alt= "profile" />
    );
}

export default ProfileImage;