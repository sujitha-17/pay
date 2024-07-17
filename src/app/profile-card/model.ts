export class profileModel {
    id: number;
    name: string;
    location: string;
    bio: string;
    profileImgSrc: string;
    website: string
    socialMediaHandle: string


    constructor(id:number,name: string, location: string, bio: string, profileImgSrc: string, website: string, socialMediaHandle: string) {
        this.name = name
        this.location = location
        this.bio = bio
        this.profileImgSrc = profileImgSrc
        this.website = website
        this.socialMediaHandle = socialMediaHandle
        this.id = id

    }
}