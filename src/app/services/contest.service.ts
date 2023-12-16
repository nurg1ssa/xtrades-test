import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Leader } from '../models/leader.model';
import { Contest } from '../models/contest.model';
import { Sponsor } from '../models/sponsor.model';
import { Participant } from '../models/participant.model';

@Injectable()
export class ContestService {
  weeklyContestData = new Subject<Contest[]>();

  private weeklyContest: Contest[] = [
    new Contest(
      0,
      'Weekly Challenges',
      new Sponsor(
        1,
        'Roger K',
        '@rog13k',
        '20,000',
        'https://s3-alpha-sig.figma.com/img/79b7/a9ee/4ba7c6c5e3fe41b11d70b5a87643c8e5?Expires=1703462400&Signature=Nj3ogAgYyepZ~CZOJBL9M14kaYBok-VZfIzNJmR2VbnWTp5HU~t9-hAVOoctfT0pQQqmooPPirUNnU2EU4n3-7IL84bvnIHQPfeEbfPzQnLweJCuHkUmHFyw5xsPJmytCF-QT9HsfgfrNHjObcwi2u92ngB1PLk1tg2Ih-xRp7UCYcTxP--Scx3vesdwD6cciLV1cD5B32pEeSmcTAePVsz6NPqG9f33wpQ9oyltadnInVcjGk-4NojsBU1YF9BcycLUYXWf0KhDkxor8dO4Wv2vahri6DpJ3rBR~~UY-wkb8JrQd5Rg~~txAEnewjc1aY5uII7nMlA162cd5Z8H9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
      ),
      [
        new Leader(
          1,
          'Roger Korsgaard',
          true,
          20,
          85,
          11,
          '+ $7,500',
          45,
          'https://s3-alpha-sig.figma.com/img/cd11/b2c1/f76e9756e202b6ff463995e7b311f68c?Expires=1703462400&Signature=XPX-rwBxYaqoV1X5u3xZlWRzj2JpFfZ05gSR00N1t1A3hUkHCdConbmqz9xqYV7we4ZsNMEbLD31EuYu0G31QohW7hzniDHJUWk3CacZzJJ5H3tWFIuMGyyhGzM41ZAZ912sp0vKeQMPoZ7FhpR~ei2BaNVbpDyZzzuxdhF-g2Rh27fJH21WWKb1z0nZVel1Ykbezgo9vyt9NT6enKUCPT5D4J0BXugOeIkXADNvPUPzr6q3xiImRQlGIKnLacT7GsffJKaA9SJjD5eNwUtryKRqTvRmCc1~OfBZeOpzwdcxntKrqTiz-t~ylTKVFks8vDbkic06VM1rJdjujVMJEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        ),
        new Leader(
          2,
          'Charlie Herwitz',
          true,
          20,
          85,
          11,
          '+ $1,430',
          25,
          'https://s3-alpha-sig.figma.com/img/bbbc/9651/77ffeff9021e058e642f492eb2ed433b?Expires=1703462400&Signature=YNAPtXm2mHu8LU9zOm4vzPcf46K0GRmX4TbsGuYD1ZFolBTvVp1Q8cyg6pxVbv8zCKWvcsUv8zWUNMHsSC1TMKeoJ8sqNH4JOnGl6ElQciYN2uLURNf6ajFgOvmkXz1ci8UNGjuno9qNiYOp8NjGdYhSuWIWatm~RnRGZVtZW9UkEydp~dinc2PNoel~gxLuDXrGldQi4a7PSNsmfFNt9G70s-X6h6OOTg1xca5ZtlHvT3oIC3PSGqybA0ZkYw8FzrDAZt8l1YD78rd7RbvVmrcSiASMPKm~qWYYzWJWAwhikjackIamHnALNFTjNSX3xf7y1frszqfnue49H2GBHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        ),
        new Leader(
          3,
          'Ahmad Mango',
          false,
          20,
          85,
          11,
          '- $1,500',
          10,
          'https://s3-alpha-sig.figma.com/img/69b1/bbb2/aea9f9e2b81ad7a4dc1f7655de9fc8c2?Expires=1703462400&Signature=A33WxQsvIpCnYN4EXBZ5HUiVQiOKZWhFjAzxVZTi1SuBMzuYCtAVnT0xsCPovi6j~~umIj9toPt-p~L5Fkg4uKMwKBAcxnJ8Ox6EHlQ7OWTfDviSdDifgnZgjL0mDuM~DjyKxjytt8r9GOUlmlpTBLEScHRXogzuFIPxnmjdGcDN3XTenXf-ulwdnITbKBMVY9XSWljUoOWn6N30f2A7Dg01ati6LMay9BjBzElURK0gmSIJiTbWzqZKfNks1jpZ-KdmOhznNmSd9d6URvycSekccocPhbM~bt7Xd-A0AKjbjxLpnhLYK5Ztasslx6hpnRBaIBA284AshsePoL0M~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        ),
      ],
      3,
      true,
      [
        new Participant(1,'https://s3-alpha-sig.figma.com/img/5363/2cc9/a14bd50acb782ec95b0137c12959fe6c?Expires=1703462400&Signature=K19C~INs5dtsUgrUt8a-TvdCY3rLOCQLK246Tk6-KqM3rvfdQY9BIuF6WKC~350vGgu9cIlxgwliEODWRGxCY2I-eO00Dtt9J3jys7JIlcjcrXjRnIEWLOWzZQwx1afqdWqE2QZBvwMIpR2G1jvXHF4rBzEWwcKZi39xD3JR~eEOqlz9Q3eQIeCymHZzUNLA4mXJU1wKxzBdq5H4oViH-PIWm3pcVmZaiBMQHtz79XP8v5tIaLUHCkGNMIHincnJwjzR126h9NTrjMdZOi0vf92ifjx4-0Jmdf7t9bwd6LKUy1uJqPHahmT3oBAzMP2VpxglypRnPBY6s2-rpo77yg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(2, 'https://s3-alpha-sig.figma.com/img/cd11/b2c1/f76e9756e202b6ff463995e7b311f68c?Expires=1703462400&Signature=XPX-rwBxYaqoV1X5u3xZlWRzj2JpFfZ05gSR00N1t1A3hUkHCdConbmqz9xqYV7we4ZsNMEbLD31EuYu0G31QohW7hzniDHJUWk3CacZzJJ5H3tWFIuMGyyhGzM41ZAZ912sp0vKeQMPoZ7FhpR~ei2BaNVbpDyZzzuxdhF-g2Rh27fJH21WWKb1z0nZVel1Ykbezgo9vyt9NT6enKUCPT5D4J0BXugOeIkXADNvPUPzr6q3xiImRQlGIKnLacT7GsffJKaA9SJjD5eNwUtryKRqTvRmCc1~OfBZeOpzwdcxntKrqTiz-t~ylTKVFks8vDbkic06VM1rJdjujVMJEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(3, 'https://s3-alpha-sig.figma.com/img/bbbc/9651/77ffeff9021e058e642f492eb2ed433b?Expires=1703462400&Signature=YNAPtXm2mHu8LU9zOm4vzPcf46K0GRmX4TbsGuYD1ZFolBTvVp1Q8cyg6pxVbv8zCKWvcsUv8zWUNMHsSC1TMKeoJ8sqNH4JOnGl6ElQciYN2uLURNf6ajFgOvmkXz1ci8UNGjuno9qNiYOp8NjGdYhSuWIWatm~RnRGZVtZW9UkEydp~dinc2PNoel~gxLuDXrGldQi4a7PSNsmfFNt9G70s-X6h6OOTg1xca5ZtlHvT3oIC3PSGqybA0ZkYw8FzrDAZt8l1YD78rd7RbvVmrcSiASMPKm~qWYYzWJWAwhikjackIamHnALNFTjNSX3xf7y1frszqfnue49H2GBHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(4,'https://s3-alpha-sig.figma.com/img/5363/2cc9/a14bd50acb782ec95b0137c12959fe6c?Expires=1703462400&Signature=K19C~INs5dtsUgrUt8a-TvdCY3rLOCQLK246Tk6-KqM3rvfdQY9BIuF6WKC~350vGgu9cIlxgwliEODWRGxCY2I-eO00Dtt9J3jys7JIlcjcrXjRnIEWLOWzZQwx1afqdWqE2QZBvwMIpR2G1jvXHF4rBzEWwcKZi39xD3JR~eEOqlz9Q3eQIeCymHZzUNLA4mXJU1wKxzBdq5H4oViH-PIWm3pcVmZaiBMQHtz79XP8v5tIaLUHCkGNMIHincnJwjzR126h9NTrjMdZOi0vf92ifjx4-0Jmdf7t9bwd6LKUy1uJqPHahmT3oBAzMP2VpxglypRnPBY6s2-rpo77yg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(5, 'https://s3-alpha-sig.figma.com/img/cd11/b2c1/f76e9756e202b6ff463995e7b311f68c?Expires=1703462400&Signature=XPX-rwBxYaqoV1X5u3xZlWRzj2JpFfZ05gSR00N1t1A3hUkHCdConbmqz9xqYV7we4ZsNMEbLD31EuYu0G31QohW7hzniDHJUWk3CacZzJJ5H3tWFIuMGyyhGzM41ZAZ912sp0vKeQMPoZ7FhpR~ei2BaNVbpDyZzzuxdhF-g2Rh27fJH21WWKb1z0nZVel1Ykbezgo9vyt9NT6enKUCPT5D4J0BXugOeIkXADNvPUPzr6q3xiImRQlGIKnLacT7GsffJKaA9SJjD5eNwUtryKRqTvRmCc1~OfBZeOpzwdcxntKrqTiz-t~ylTKVFks8vDbkic06VM1rJdjujVMJEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(6, 'https://s3-alpha-sig.figma.com/img/bbbc/9651/77ffeff9021e058e642f492eb2ed433b?Expires=1703462400&Signature=YNAPtXm2mHu8LU9zOm4vzPcf46K0GRmX4TbsGuYD1ZFolBTvVp1Q8cyg6pxVbv8zCKWvcsUv8zWUNMHsSC1TMKeoJ8sqNH4JOnGl6ElQciYN2uLURNf6ajFgOvmkXz1ci8UNGjuno9qNiYOp8NjGdYhSuWIWatm~RnRGZVtZW9UkEydp~dinc2PNoel~gxLuDXrGldQi4a7PSNsmfFNt9G70s-X6h6OOTg1xca5ZtlHvT3oIC3PSGqybA0ZkYw8FzrDAZt8l1YD78rd7RbvVmrcSiASMPKm~qWYYzWJWAwhikjackIamHnALNFTjNSX3xf7y1frszqfnue49H2GBHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(7,'https://s3-alpha-sig.figma.com/img/5363/2cc9/a14bd50acb782ec95b0137c12959fe6c?Expires=1703462400&Signature=K19C~INs5dtsUgrUt8a-TvdCY3rLOCQLK246Tk6-KqM3rvfdQY9BIuF6WKC~350vGgu9cIlxgwliEODWRGxCY2I-eO00Dtt9J3jys7JIlcjcrXjRnIEWLOWzZQwx1afqdWqE2QZBvwMIpR2G1jvXHF4rBzEWwcKZi39xD3JR~eEOqlz9Q3eQIeCymHZzUNLA4mXJU1wKxzBdq5H4oViH-PIWm3pcVmZaiBMQHtz79XP8v5tIaLUHCkGNMIHincnJwjzR126h9NTrjMdZOi0vf92ifjx4-0Jmdf7t9bwd6LKUy1uJqPHahmT3oBAzMP2VpxglypRnPBY6s2-rpo77yg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(8, 'https://s3-alpha-sig.figma.com/img/cd11/b2c1/f76e9756e202b6ff463995e7b311f68c?Expires=1703462400&Signature=XPX-rwBxYaqoV1X5u3xZlWRzj2JpFfZ05gSR00N1t1A3hUkHCdConbmqz9xqYV7we4ZsNMEbLD31EuYu0G31QohW7hzniDHJUWk3CacZzJJ5H3tWFIuMGyyhGzM41ZAZ912sp0vKeQMPoZ7FhpR~ei2BaNVbpDyZzzuxdhF-g2Rh27fJH21WWKb1z0nZVel1Ykbezgo9vyt9NT6enKUCPT5D4J0BXugOeIkXADNvPUPzr6q3xiImRQlGIKnLacT7GsffJKaA9SJjD5eNwUtryKRqTvRmCc1~OfBZeOpzwdcxntKrqTiz-t~ylTKVFks8vDbkic06VM1rJdjujVMJEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(9, 'https://s3-alpha-sig.figma.com/img/bbbc/9651/77ffeff9021e058e642f492eb2ed433b?Expires=1703462400&Signature=YNAPtXm2mHu8LU9zOm4vzPcf46K0GRmX4TbsGuYD1ZFolBTvVp1Q8cyg6pxVbv8zCKWvcsUv8zWUNMHsSC1TMKeoJ8sqNH4JOnGl6ElQciYN2uLURNf6ajFgOvmkXz1ci8UNGjuno9qNiYOp8NjGdYhSuWIWatm~RnRGZVtZW9UkEydp~dinc2PNoel~gxLuDXrGldQi4a7PSNsmfFNt9G70s-X6h6OOTg1xca5ZtlHvT3oIC3PSGqybA0ZkYw8FzrDAZt8l1YD78rd7RbvVmrcSiASMPKm~qWYYzWJWAwhikjackIamHnALNFTjNSX3xf7y1frszqfnue49H2GBHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(10,'https://s3-alpha-sig.figma.com/img/5363/2cc9/a14bd50acb782ec95b0137c12959fe6c?Expires=1703462400&Signature=K19C~INs5dtsUgrUt8a-TvdCY3rLOCQLK246Tk6-KqM3rvfdQY9BIuF6WKC~350vGgu9cIlxgwliEODWRGxCY2I-eO00Dtt9J3jys7JIlcjcrXjRnIEWLOWzZQwx1afqdWqE2QZBvwMIpR2G1jvXHF4rBzEWwcKZi39xD3JR~eEOqlz9Q3eQIeCymHZzUNLA4mXJU1wKxzBdq5H4oViH-PIWm3pcVmZaiBMQHtz79XP8v5tIaLUHCkGNMIHincnJwjzR126h9NTrjMdZOi0vf92ifjx4-0Jmdf7t9bwd6LKUy1uJqPHahmT3oBAzMP2VpxglypRnPBY6s2-rpo77yg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(11, 'https://s3-alpha-sig.figma.com/img/cd11/b2c1/f76e9756e202b6ff463995e7b311f68c?Expires=1703462400&Signature=XPX-rwBxYaqoV1X5u3xZlWRzj2JpFfZ05gSR00N1t1A3hUkHCdConbmqz9xqYV7we4ZsNMEbLD31EuYu0G31QohW7hzniDHJUWk3CacZzJJ5H3tWFIuMGyyhGzM41ZAZ912sp0vKeQMPoZ7FhpR~ei2BaNVbpDyZzzuxdhF-g2Rh27fJH21WWKb1z0nZVel1Ykbezgo9vyt9NT6enKUCPT5D4J0BXugOeIkXADNvPUPzr6q3xiImRQlGIKnLacT7GsffJKaA9SJjD5eNwUtryKRqTvRmCc1~OfBZeOpzwdcxntKrqTiz-t~ylTKVFks8vDbkic06VM1rJdjujVMJEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(12, 'https://s3-alpha-sig.figma.com/img/bbbc/9651/77ffeff9021e058e642f492eb2ed433b?Expires=1703462400&Signature=YNAPtXm2mHu8LU9zOm4vzPcf46K0GRmX4TbsGuYD1ZFolBTvVp1Q8cyg6pxVbv8zCKWvcsUv8zWUNMHsSC1TMKeoJ8sqNH4JOnGl6ElQciYN2uLURNf6ajFgOvmkXz1ci8UNGjuno9qNiYOp8NjGdYhSuWIWatm~RnRGZVtZW9UkEydp~dinc2PNoel~gxLuDXrGldQi4a7PSNsmfFNt9G70s-X6h6OOTg1xca5ZtlHvT3oIC3PSGqybA0ZkYw8FzrDAZt8l1YD78rd7RbvVmrcSiASMPKm~qWYYzWJWAwhikjackIamHnALNFTjNSX3xf7y1frszqfnue49H2GBHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(13,'https://s3-alpha-sig.figma.com/img/5363/2cc9/a14bd50acb782ec95b0137c12959fe6c?Expires=1703462400&Signature=K19C~INs5dtsUgrUt8a-TvdCY3rLOCQLK246Tk6-KqM3rvfdQY9BIuF6WKC~350vGgu9cIlxgwliEODWRGxCY2I-eO00Dtt9J3jys7JIlcjcrXjRnIEWLOWzZQwx1afqdWqE2QZBvwMIpR2G1jvXHF4rBzEWwcKZi39xD3JR~eEOqlz9Q3eQIeCymHZzUNLA4mXJU1wKxzBdq5H4oViH-PIWm3pcVmZaiBMQHtz79XP8v5tIaLUHCkGNMIHincnJwjzR126h9NTrjMdZOi0vf92ifjx4-0Jmdf7t9bwd6LKUy1uJqPHahmT3oBAzMP2VpxglypRnPBY6s2-rpo77yg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(14, 'https://s3-alpha-sig.figma.com/img/cd11/b2c1/f76e9756e202b6ff463995e7b311f68c?Expires=1703462400&Signature=XPX-rwBxYaqoV1X5u3xZlWRzj2JpFfZ05gSR00N1t1A3hUkHCdConbmqz9xqYV7we4ZsNMEbLD31EuYu0G31QohW7hzniDHJUWk3CacZzJJ5H3tWFIuMGyyhGzM41ZAZ912sp0vKeQMPoZ7FhpR~ei2BaNVbpDyZzzuxdhF-g2Rh27fJH21WWKb1z0nZVel1Ykbezgo9vyt9NT6enKUCPT5D4J0BXugOeIkXADNvPUPzr6q3xiImRQlGIKnLacT7GsffJKaA9SJjD5eNwUtryKRqTvRmCc1~OfBZeOpzwdcxntKrqTiz-t~ylTKVFks8vDbkic06VM1rJdjujVMJEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(15, 'https://s3-alpha-sig.figma.com/img/bbbc/9651/77ffeff9021e058e642f492eb2ed433b?Expires=1703462400&Signature=YNAPtXm2mHu8LU9zOm4vzPcf46K0GRmX4TbsGuYD1ZFolBTvVp1Q8cyg6pxVbv8zCKWvcsUv8zWUNMHsSC1TMKeoJ8sqNH4JOnGl6ElQciYN2uLURNf6ajFgOvmkXz1ci8UNGjuno9qNiYOp8NjGdYhSuWIWatm~RnRGZVtZW9UkEydp~dinc2PNoel~gxLuDXrGldQi4a7PSNsmfFNt9G70s-X6h6OOTg1xca5ZtlHvT3oIC3PSGqybA0ZkYw8FzrDAZt8l1YD78rd7RbvVmrcSiASMPKm~qWYYzWJWAwhikjackIamHnALNFTjNSX3xf7y1frszqfnue49H2GBHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(16,'https://s3-alpha-sig.figma.com/img/5363/2cc9/a14bd50acb782ec95b0137c12959fe6c?Expires=1703462400&Signature=K19C~INs5dtsUgrUt8a-TvdCY3rLOCQLK246Tk6-KqM3rvfdQY9BIuF6WKC~350vGgu9cIlxgwliEODWRGxCY2I-eO00Dtt9J3jys7JIlcjcrXjRnIEWLOWzZQwx1afqdWqE2QZBvwMIpR2G1jvXHF4rBzEWwcKZi39xD3JR~eEOqlz9Q3eQIeCymHZzUNLA4mXJU1wKxzBdq5H4oViH-PIWm3pcVmZaiBMQHtz79XP8v5tIaLUHCkGNMIHincnJwjzR126h9NTrjMdZOi0vf92ifjx4-0Jmdf7t9bwd6LKUy1uJqPHahmT3oBAzMP2VpxglypRnPBY6s2-rpo77yg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(17, 'https://s3-alpha-sig.figma.com/img/cd11/b2c1/f76e9756e202b6ff463995e7b311f68c?Expires=1703462400&Signature=XPX-rwBxYaqoV1X5u3xZlWRzj2JpFfZ05gSR00N1t1A3hUkHCdConbmqz9xqYV7we4ZsNMEbLD31EuYu0G31QohW7hzniDHJUWk3CacZzJJ5H3tWFIuMGyyhGzM41ZAZ912sp0vKeQMPoZ7FhpR~ei2BaNVbpDyZzzuxdhF-g2Rh27fJH21WWKb1z0nZVel1Ykbezgo9vyt9NT6enKUCPT5D4J0BXugOeIkXADNvPUPzr6q3xiImRQlGIKnLacT7GsffJKaA9SJjD5eNwUtryKRqTvRmCc1~OfBZeOpzwdcxntKrqTiz-t~ylTKVFks8vDbkic06VM1rJdjujVMJEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(18, 'https://s3-alpha-sig.figma.com/img/bbbc/9651/77ffeff9021e058e642f492eb2ed433b?Expires=1703462400&Signature=YNAPtXm2mHu8LU9zOm4vzPcf46K0GRmX4TbsGuYD1ZFolBTvVp1Q8cyg6pxVbv8zCKWvcsUv8zWUNMHsSC1TMKeoJ8sqNH4JOnGl6ElQciYN2uLURNf6ajFgOvmkXz1ci8UNGjuno9qNiYOp8NjGdYhSuWIWatm~RnRGZVtZW9UkEydp~dinc2PNoel~gxLuDXrGldQi4a7PSNsmfFNt9G70s-X6h6OOTg1xca5ZtlHvT3oIC3PSGqybA0ZkYw8FzrDAZt8l1YD78rd7RbvVmrcSiASMPKm~qWYYzWJWAwhikjackIamHnALNFTjNSX3xf7y1frszqfnue49H2GBHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(19,'https://s3-alpha-sig.figma.com/img/5363/2cc9/a14bd50acb782ec95b0137c12959fe6c?Expires=1703462400&Signature=K19C~INs5dtsUgrUt8a-TvdCY3rLOCQLK246Tk6-KqM3rvfdQY9BIuF6WKC~350vGgu9cIlxgwliEODWRGxCY2I-eO00Dtt9J3jys7JIlcjcrXjRnIEWLOWzZQwx1afqdWqE2QZBvwMIpR2G1jvXHF4rBzEWwcKZi39xD3JR~eEOqlz9Q3eQIeCymHZzUNLA4mXJU1wKxzBdq5H4oViH-PIWm3pcVmZaiBMQHtz79XP8v5tIaLUHCkGNMIHincnJwjzR126h9NTrjMdZOi0vf92ifjx4-0Jmdf7t9bwd6LKUy1uJqPHahmT3oBAzMP2VpxglypRnPBY6s2-rpo77yg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(20, 'https://s3-alpha-sig.figma.com/img/cd11/b2c1/f76e9756e202b6ff463995e7b311f68c?Expires=1703462400&Signature=XPX-rwBxYaqoV1X5u3xZlWRzj2JpFfZ05gSR00N1t1A3hUkHCdConbmqz9xqYV7we4ZsNMEbLD31EuYu0G31QohW7hzniDHJUWk3CacZzJJ5H3tWFIuMGyyhGzM41ZAZ912sp0vKeQMPoZ7FhpR~ei2BaNVbpDyZzzuxdhF-g2Rh27fJH21WWKb1z0nZVel1Ykbezgo9vyt9NT6enKUCPT5D4J0BXugOeIkXADNvPUPzr6q3xiImRQlGIKnLacT7GsffJKaA9SJjD5eNwUtryKRqTvRmCc1~OfBZeOpzwdcxntKrqTiz-t~ylTKVFks8vDbkic06VM1rJdjujVMJEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(21, 'https://s3-alpha-sig.figma.com/img/bbbc/9651/77ffeff9021e058e642f492eb2ed433b?Expires=1703462400&Signature=YNAPtXm2mHu8LU9zOm4vzPcf46K0GRmX4TbsGuYD1ZFolBTvVp1Q8cyg6pxVbv8zCKWvcsUv8zWUNMHsSC1TMKeoJ8sqNH4JOnGl6ElQciYN2uLURNf6ajFgOvmkXz1ci8UNGjuno9qNiYOp8NjGdYhSuWIWatm~RnRGZVtZW9UkEydp~dinc2PNoel~gxLuDXrGldQi4a7PSNsmfFNt9G70s-X6h6OOTg1xca5ZtlHvT3oIC3PSGqybA0ZkYw8FzrDAZt8l1YD78rd7RbvVmrcSiASMPKm~qWYYzWJWAwhikjackIamHnALNFTjNSX3xf7y1frszqfnue49H2GBHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
      ]
    ),
    new Contest(
      1,
      'Double Gain Week Contest',
      new Sponsor(
        1,
        'Cristofer G.',
        '@mrcrisrich',
        '15,000',
        'https://s3-alpha-sig.figma.com/img/79b7/a9ee/4ba7c6c5e3fe41b11d70b5a87643c8e5?Expires=1703462400&Signature=Nj3ogAgYyepZ~CZOJBL9M14kaYBok-VZfIzNJmR2VbnWTp5HU~t9-hAVOoctfT0pQQqmooPPirUNnU2EU4n3-7IL84bvnIHQPfeEbfPzQnLweJCuHkUmHFyw5xsPJmytCF-QT9HsfgfrNHjObcwi2u92ngB1PLk1tg2Ih-xRp7UCYcTxP--Scx3vesdwD6cciLV1cD5B32pEeSmcTAePVsz6NPqG9f33wpQ9oyltadnInVcjGk-4NojsBU1YF9BcycLUYXWf0KhDkxor8dO4Wv2vahri6DpJ3rBR~~UY-wkb8JrQd5Rg~~txAEnewjc1aY5uII7nMlA162cd5Z8H9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
      ),
      [
        new Leader(
          4,
          'Zain Mango',
          true,
          20,
          85,
          11,
          '+ $3,500',
          32,
          'https://s3-alpha-sig.figma.com/img/7ac1/d692/915d4a2ae3b191c108a020250f70e51d?Expires=1703462400&Signature=dQ2V0bRoRzlD9IBycxidE-HEEoUIufCrzS-XmTzW28Og3KgRL26zjKrK81B8P59KJdJVgMjGZjrjcZmiz-4bhNFt6oeZuOhN4cc-XzEobjML6fRDUcID11hKZCzO2lMqteQN5AZ6RlMd-gioDJkDeCWVSCJTdhB7cl3Z-Ewiw8djG2eUJL14ibFXqv2vmlvPBWT5AfwL2luzZxp0jQbA8AaYMPruyJc1~SS~FK8FQsGZtZeJ241Ohm8~QPyNJbChLFvkn94jMkw0NMJc~MaA2vITA9uOYGwaIwMdJD1OeATjr5b2lQhhVWYl4pQK9sIvViLZ9rWEpE~WPQJ0V91tpQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        ),
        new Leader(
          5,
          'Leo Kenter',
          false,
          20,
          85,
          11,
          '+ $2,550',
          18,
          'https://s3-alpha-sig.figma.com/img/981e/7fbf/54cd2695147c8936d22036f2e644e802?Expires=1703462400&Signature=OCyzx2jNOphaVbxf4tPr3Uu~M-cEVk3rbZaFPv03Pp-4b044VqNQLwqXnPsi8sBxtZX9Mb3kLQmRjUTcP1ohhQr3fe1vmu3DSsdbK5~7KRsqdONVJomBTzCD~y4W319u3D-FORu8Qkxj3WCvudjmTWOxGGcS4R9qk9LsSMNvOcWebuoyjK53T8masyprTSZGCK8wXr9kguaUfMSQQxGtM30joTDmiRsAXaVBeE6UGHFGFhTnGImfwqtwcTGFbxeKF71PvCX5xjJNe8FxFg3n8LZPnlBWjWlFzYS9fVIZHQMxcg8EuP0~tpYcfcX31ausGXNt~Dp4948smvbPEa71zg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        ),
        new Leader(
          6,
          'Marcus Dias',
          false,
          20,
          85,
          11,
          '+ $1,000',
          10,
          'https://s3-alpha-sig.figma.com/img/bb3f/de98/540bc9acdc58d1e8d3e71a4b7706a473?Expires=1703462400&Signature=BIcBxjzJf1FrUZ0AqAKmyzcgnrLUNGcvPbj0R0H4hBKIEzwME7lli~~Ojk6xiCEgZwTS7GNhNScCMP9nm6r5Td~h4mklOcmbY-lXmwe2Eg-uHaz4ykWyIrvfzzQwc9iKDX2WcRCvf5T9fQqAmVxpqeGBNQ-iLgDeTjvpZBvQoH43PT5-Kas8ygRK5YiSuqXLByNCytzEq4JPtiCFE2SEQSgITnW88tojR479VDD-Dk1eL7sEJ-kI~imZvEKKUU0bqD4uet61uq5qedeOo5buuZeuaYsEaq-Nry7pVdubNzqVY5Zx1numg0g84QQuZ4iJG-l4~XwhvVjPGOw3NaGzdw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        ),
      ],
      7,
      false,
      [
        new Participant(1,'https://s3-alpha-sig.figma.com/img/5363/2cc9/a14bd50acb782ec95b0137c12959fe6c?Expires=1703462400&Signature=K19C~INs5dtsUgrUt8a-TvdCY3rLOCQLK246Tk6-KqM3rvfdQY9BIuF6WKC~350vGgu9cIlxgwliEODWRGxCY2I-eO00Dtt9J3jys7JIlcjcrXjRnIEWLOWzZQwx1afqdWqE2QZBvwMIpR2G1jvXHF4rBzEWwcKZi39xD3JR~eEOqlz9Q3eQIeCymHZzUNLA4mXJU1wKxzBdq5H4oViH-PIWm3pcVmZaiBMQHtz79XP8v5tIaLUHCkGNMIHincnJwjzR126h9NTrjMdZOi0vf92ifjx4-0Jmdf7t9bwd6LKUy1uJqPHahmT3oBAzMP2VpxglypRnPBY6s2-rpo77yg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(2, 'https://s3-alpha-sig.figma.com/img/cd11/b2c1/f76e9756e202b6ff463995e7b311f68c?Expires=1703462400&Signature=XPX-rwBxYaqoV1X5u3xZlWRzj2JpFfZ05gSR00N1t1A3hUkHCdConbmqz9xqYV7we4ZsNMEbLD31EuYu0G31QohW7hzniDHJUWk3CacZzJJ5H3tWFIuMGyyhGzM41ZAZ912sp0vKeQMPoZ7FhpR~ei2BaNVbpDyZzzuxdhF-g2Rh27fJH21WWKb1z0nZVel1Ykbezgo9vyt9NT6enKUCPT5D4J0BXugOeIkXADNvPUPzr6q3xiImRQlGIKnLacT7GsffJKaA9SJjD5eNwUtryKRqTvRmCc1~OfBZeOpzwdcxntKrqTiz-t~ylTKVFks8vDbkic06VM1rJdjujVMJEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(3, 'https://s3-alpha-sig.figma.com/img/bbbc/9651/77ffeff9021e058e642f492eb2ed433b?Expires=1703462400&Signature=YNAPtXm2mHu8LU9zOm4vzPcf46K0GRmX4TbsGuYD1ZFolBTvVp1Q8cyg6pxVbv8zCKWvcsUv8zWUNMHsSC1TMKeoJ8sqNH4JOnGl6ElQciYN2uLURNf6ajFgOvmkXz1ci8UNGjuno9qNiYOp8NjGdYhSuWIWatm~RnRGZVtZW9UkEydp~dinc2PNoel~gxLuDXrGldQi4a7PSNsmfFNt9G70s-X6h6OOTg1xca5ZtlHvT3oIC3PSGqybA0ZkYw8FzrDAZt8l1YD78rd7RbvVmrcSiASMPKm~qWYYzWJWAwhikjackIamHnALNFTjNSX3xf7y1frszqfnue49H2GBHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(4,'https://s3-alpha-sig.figma.com/img/5363/2cc9/a14bd50acb782ec95b0137c12959fe6c?Expires=1703462400&Signature=K19C~INs5dtsUgrUt8a-TvdCY3rLOCQLK246Tk6-KqM3rvfdQY9BIuF6WKC~350vGgu9cIlxgwliEODWRGxCY2I-eO00Dtt9J3jys7JIlcjcrXjRnIEWLOWzZQwx1afqdWqE2QZBvwMIpR2G1jvXHF4rBzEWwcKZi39xD3JR~eEOqlz9Q3eQIeCymHZzUNLA4mXJU1wKxzBdq5H4oViH-PIWm3pcVmZaiBMQHtz79XP8v5tIaLUHCkGNMIHincnJwjzR126h9NTrjMdZOi0vf92ifjx4-0Jmdf7t9bwd6LKUy1uJqPHahmT3oBAzMP2VpxglypRnPBY6s2-rpo77yg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(5, 'https://s3-alpha-sig.figma.com/img/cd11/b2c1/f76e9756e202b6ff463995e7b311f68c?Expires=1703462400&Signature=XPX-rwBxYaqoV1X5u3xZlWRzj2JpFfZ05gSR00N1t1A3hUkHCdConbmqz9xqYV7we4ZsNMEbLD31EuYu0G31QohW7hzniDHJUWk3CacZzJJ5H3tWFIuMGyyhGzM41ZAZ912sp0vKeQMPoZ7FhpR~ei2BaNVbpDyZzzuxdhF-g2Rh27fJH21WWKb1z0nZVel1Ykbezgo9vyt9NT6enKUCPT5D4J0BXugOeIkXADNvPUPzr6q3xiImRQlGIKnLacT7GsffJKaA9SJjD5eNwUtryKRqTvRmCc1~OfBZeOpzwdcxntKrqTiz-t~ylTKVFks8vDbkic06VM1rJdjujVMJEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(6, 'https://s3-alpha-sig.figma.com/img/bbbc/9651/77ffeff9021e058e642f492eb2ed433b?Expires=1703462400&Signature=YNAPtXm2mHu8LU9zOm4vzPcf46K0GRmX4TbsGuYD1ZFolBTvVp1Q8cyg6pxVbv8zCKWvcsUv8zWUNMHsSC1TMKeoJ8sqNH4JOnGl6ElQciYN2uLURNf6ajFgOvmkXz1ci8UNGjuno9qNiYOp8NjGdYhSuWIWatm~RnRGZVtZW9UkEydp~dinc2PNoel~gxLuDXrGldQi4a7PSNsmfFNt9G70s-X6h6OOTg1xca5ZtlHvT3oIC3PSGqybA0ZkYw8FzrDAZt8l1YD78rd7RbvVmrcSiASMPKm~qWYYzWJWAwhikjackIamHnALNFTjNSX3xf7y1frszqfnue49H2GBHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(7,'https://s3-alpha-sig.figma.com/img/5363/2cc9/a14bd50acb782ec95b0137c12959fe6c?Expires=1703462400&Signature=K19C~INs5dtsUgrUt8a-TvdCY3rLOCQLK246Tk6-KqM3rvfdQY9BIuF6WKC~350vGgu9cIlxgwliEODWRGxCY2I-eO00Dtt9J3jys7JIlcjcrXjRnIEWLOWzZQwx1afqdWqE2QZBvwMIpR2G1jvXHF4rBzEWwcKZi39xD3JR~eEOqlz9Q3eQIeCymHZzUNLA4mXJU1wKxzBdq5H4oViH-PIWm3pcVmZaiBMQHtz79XP8v5tIaLUHCkGNMIHincnJwjzR126h9NTrjMdZOi0vf92ifjx4-0Jmdf7t9bwd6LKUy1uJqPHahmT3oBAzMP2VpxglypRnPBY6s2-rpo77yg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(8, 'https://s3-alpha-sig.figma.com/img/cd11/b2c1/f76e9756e202b6ff463995e7b311f68c?Expires=1703462400&Signature=XPX-rwBxYaqoV1X5u3xZlWRzj2JpFfZ05gSR00N1t1A3hUkHCdConbmqz9xqYV7we4ZsNMEbLD31EuYu0G31QohW7hzniDHJUWk3CacZzJJ5H3tWFIuMGyyhGzM41ZAZ912sp0vKeQMPoZ7FhpR~ei2BaNVbpDyZzzuxdhF-g2Rh27fJH21WWKb1z0nZVel1Ykbezgo9vyt9NT6enKUCPT5D4J0BXugOeIkXADNvPUPzr6q3xiImRQlGIKnLacT7GsffJKaA9SJjD5eNwUtryKRqTvRmCc1~OfBZeOpzwdcxntKrqTiz-t~ylTKVFks8vDbkic06VM1rJdjujVMJEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(9, 'https://s3-alpha-sig.figma.com/img/bbbc/9651/77ffeff9021e058e642f492eb2ed433b?Expires=1703462400&Signature=YNAPtXm2mHu8LU9zOm4vzPcf46K0GRmX4TbsGuYD1ZFolBTvVp1Q8cyg6pxVbv8zCKWvcsUv8zWUNMHsSC1TMKeoJ8sqNH4JOnGl6ElQciYN2uLURNf6ajFgOvmkXz1ci8UNGjuno9qNiYOp8NjGdYhSuWIWatm~RnRGZVtZW9UkEydp~dinc2PNoel~gxLuDXrGldQi4a7PSNsmfFNt9G70s-X6h6OOTg1xca5ZtlHvT3oIC3PSGqybA0ZkYw8FzrDAZt8l1YD78rd7RbvVmrcSiASMPKm~qWYYzWJWAwhikjackIamHnALNFTjNSX3xf7y1frszqfnue49H2GBHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(10,'https://s3-alpha-sig.figma.com/img/5363/2cc9/a14bd50acb782ec95b0137c12959fe6c?Expires=1703462400&Signature=K19C~INs5dtsUgrUt8a-TvdCY3rLOCQLK246Tk6-KqM3rvfdQY9BIuF6WKC~350vGgu9cIlxgwliEODWRGxCY2I-eO00Dtt9J3jys7JIlcjcrXjRnIEWLOWzZQwx1afqdWqE2QZBvwMIpR2G1jvXHF4rBzEWwcKZi39xD3JR~eEOqlz9Q3eQIeCymHZzUNLA4mXJU1wKxzBdq5H4oViH-PIWm3pcVmZaiBMQHtz79XP8v5tIaLUHCkGNMIHincnJwjzR126h9NTrjMdZOi0vf92ifjx4-0Jmdf7t9bwd6LKUy1uJqPHahmT3oBAzMP2VpxglypRnPBY6s2-rpo77yg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(11, 'https://s3-alpha-sig.figma.com/img/cd11/b2c1/f76e9756e202b6ff463995e7b311f68c?Expires=1703462400&Signature=XPX-rwBxYaqoV1X5u3xZlWRzj2JpFfZ05gSR00N1t1A3hUkHCdConbmqz9xqYV7we4ZsNMEbLD31EuYu0G31QohW7hzniDHJUWk3CacZzJJ5H3tWFIuMGyyhGzM41ZAZ912sp0vKeQMPoZ7FhpR~ei2BaNVbpDyZzzuxdhF-g2Rh27fJH21WWKb1z0nZVel1Ykbezgo9vyt9NT6enKUCPT5D4J0BXugOeIkXADNvPUPzr6q3xiImRQlGIKnLacT7GsffJKaA9SJjD5eNwUtryKRqTvRmCc1~OfBZeOpzwdcxntKrqTiz-t~ylTKVFks8vDbkic06VM1rJdjujVMJEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(12, 'https://s3-alpha-sig.figma.com/img/bbbc/9651/77ffeff9021e058e642f492eb2ed433b?Expires=1703462400&Signature=YNAPtXm2mHu8LU9zOm4vzPcf46K0GRmX4TbsGuYD1ZFolBTvVp1Q8cyg6pxVbv8zCKWvcsUv8zWUNMHsSC1TMKeoJ8sqNH4JOnGl6ElQciYN2uLURNf6ajFgOvmkXz1ci8UNGjuno9qNiYOp8NjGdYhSuWIWatm~RnRGZVtZW9UkEydp~dinc2PNoel~gxLuDXrGldQi4a7PSNsmfFNt9G70s-X6h6OOTg1xca5ZtlHvT3oIC3PSGqybA0ZkYw8FzrDAZt8l1YD78rd7RbvVmrcSiASMPKm~qWYYzWJWAwhikjackIamHnALNFTjNSX3xf7y1frszqfnue49H2GBHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(13,'https://s3-alpha-sig.figma.com/img/5363/2cc9/a14bd50acb782ec95b0137c12959fe6c?Expires=1703462400&Signature=K19C~INs5dtsUgrUt8a-TvdCY3rLOCQLK246Tk6-KqM3rvfdQY9BIuF6WKC~350vGgu9cIlxgwliEODWRGxCY2I-eO00Dtt9J3jys7JIlcjcrXjRnIEWLOWzZQwx1afqdWqE2QZBvwMIpR2G1jvXHF4rBzEWwcKZi39xD3JR~eEOqlz9Q3eQIeCymHZzUNLA4mXJU1wKxzBdq5H4oViH-PIWm3pcVmZaiBMQHtz79XP8v5tIaLUHCkGNMIHincnJwjzR126h9NTrjMdZOi0vf92ifjx4-0Jmdf7t9bwd6LKUy1uJqPHahmT3oBAzMP2VpxglypRnPBY6s2-rpo77yg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(14, 'https://s3-alpha-sig.figma.com/img/cd11/b2c1/f76e9756e202b6ff463995e7b311f68c?Expires=1703462400&Signature=XPX-rwBxYaqoV1X5u3xZlWRzj2JpFfZ05gSR00N1t1A3hUkHCdConbmqz9xqYV7we4ZsNMEbLD31EuYu0G31QohW7hzniDHJUWk3CacZzJJ5H3tWFIuMGyyhGzM41ZAZ912sp0vKeQMPoZ7FhpR~ei2BaNVbpDyZzzuxdhF-g2Rh27fJH21WWKb1z0nZVel1Ykbezgo9vyt9NT6enKUCPT5D4J0BXugOeIkXADNvPUPzr6q3xiImRQlGIKnLacT7GsffJKaA9SJjD5eNwUtryKRqTvRmCc1~OfBZeOpzwdcxntKrqTiz-t~ylTKVFks8vDbkic06VM1rJdjujVMJEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(15, 'https://s3-alpha-sig.figma.com/img/bbbc/9651/77ffeff9021e058e642f492eb2ed433b?Expires=1703462400&Signature=YNAPtXm2mHu8LU9zOm4vzPcf46K0GRmX4TbsGuYD1ZFolBTvVp1Q8cyg6pxVbv8zCKWvcsUv8zWUNMHsSC1TMKeoJ8sqNH4JOnGl6ElQciYN2uLURNf6ajFgOvmkXz1ci8UNGjuno9qNiYOp8NjGdYhSuWIWatm~RnRGZVtZW9UkEydp~dinc2PNoel~gxLuDXrGldQi4a7PSNsmfFNt9G70s-X6h6OOTg1xca5ZtlHvT3oIC3PSGqybA0ZkYw8FzrDAZt8l1YD78rd7RbvVmrcSiASMPKm~qWYYzWJWAwhikjackIamHnALNFTjNSX3xf7y1frszqfnue49H2GBHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(16,'https://s3-alpha-sig.figma.com/img/5363/2cc9/a14bd50acb782ec95b0137c12959fe6c?Expires=1703462400&Signature=K19C~INs5dtsUgrUt8a-TvdCY3rLOCQLK246Tk6-KqM3rvfdQY9BIuF6WKC~350vGgu9cIlxgwliEODWRGxCY2I-eO00Dtt9J3jys7JIlcjcrXjRnIEWLOWzZQwx1afqdWqE2QZBvwMIpR2G1jvXHF4rBzEWwcKZi39xD3JR~eEOqlz9Q3eQIeCymHZzUNLA4mXJU1wKxzBdq5H4oViH-PIWm3pcVmZaiBMQHtz79XP8v5tIaLUHCkGNMIHincnJwjzR126h9NTrjMdZOi0vf92ifjx4-0Jmdf7t9bwd6LKUy1uJqPHahmT3oBAzMP2VpxglypRnPBY6s2-rpo77yg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(17, 'https://s3-alpha-sig.figma.com/img/cd11/b2c1/f76e9756e202b6ff463995e7b311f68c?Expires=1703462400&Signature=XPX-rwBxYaqoV1X5u3xZlWRzj2JpFfZ05gSR00N1t1A3hUkHCdConbmqz9xqYV7we4ZsNMEbLD31EuYu0G31QohW7hzniDHJUWk3CacZzJJ5H3tWFIuMGyyhGzM41ZAZ912sp0vKeQMPoZ7FhpR~ei2BaNVbpDyZzzuxdhF-g2Rh27fJH21WWKb1z0nZVel1Ykbezgo9vyt9NT6enKUCPT5D4J0BXugOeIkXADNvPUPzr6q3xiImRQlGIKnLacT7GsffJKaA9SJjD5eNwUtryKRqTvRmCc1~OfBZeOpzwdcxntKrqTiz-t~ylTKVFks8vDbkic06VM1rJdjujVMJEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(18, 'https://s3-alpha-sig.figma.com/img/bbbc/9651/77ffeff9021e058e642f492eb2ed433b?Expires=1703462400&Signature=YNAPtXm2mHu8LU9zOm4vzPcf46K0GRmX4TbsGuYD1ZFolBTvVp1Q8cyg6pxVbv8zCKWvcsUv8zWUNMHsSC1TMKeoJ8sqNH4JOnGl6ElQciYN2uLURNf6ajFgOvmkXz1ci8UNGjuno9qNiYOp8NjGdYhSuWIWatm~RnRGZVtZW9UkEydp~dinc2PNoel~gxLuDXrGldQi4a7PSNsmfFNt9G70s-X6h6OOTg1xca5ZtlHvT3oIC3PSGqybA0ZkYw8FzrDAZt8l1YD78rd7RbvVmrcSiASMPKm~qWYYzWJWAwhikjackIamHnALNFTjNSX3xf7y1frszqfnue49H2GBHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(19,'https://s3-alpha-sig.figma.com/img/5363/2cc9/a14bd50acb782ec95b0137c12959fe6c?Expires=1703462400&Signature=K19C~INs5dtsUgrUt8a-TvdCY3rLOCQLK246Tk6-KqM3rvfdQY9BIuF6WKC~350vGgu9cIlxgwliEODWRGxCY2I-eO00Dtt9J3jys7JIlcjcrXjRnIEWLOWzZQwx1afqdWqE2QZBvwMIpR2G1jvXHF4rBzEWwcKZi39xD3JR~eEOqlz9Q3eQIeCymHZzUNLA4mXJU1wKxzBdq5H4oViH-PIWm3pcVmZaiBMQHtz79XP8v5tIaLUHCkGNMIHincnJwjzR126h9NTrjMdZOi0vf92ifjx4-0Jmdf7t9bwd6LKUy1uJqPHahmT3oBAzMP2VpxglypRnPBY6s2-rpo77yg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(20, 'https://s3-alpha-sig.figma.com/img/cd11/b2c1/f76e9756e202b6ff463995e7b311f68c?Expires=1703462400&Signature=XPX-rwBxYaqoV1X5u3xZlWRzj2JpFfZ05gSR00N1t1A3hUkHCdConbmqz9xqYV7we4ZsNMEbLD31EuYu0G31QohW7hzniDHJUWk3CacZzJJ5H3tWFIuMGyyhGzM41ZAZ912sp0vKeQMPoZ7FhpR~ei2BaNVbpDyZzzuxdhF-g2Rh27fJH21WWKb1z0nZVel1Ykbezgo9vyt9NT6enKUCPT5D4J0BXugOeIkXADNvPUPzr6q3xiImRQlGIKnLacT7GsffJKaA9SJjD5eNwUtryKRqTvRmCc1~OfBZeOpzwdcxntKrqTiz-t~ylTKVFks8vDbkic06VM1rJdjujVMJEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
        new Participant(21, 'https://s3-alpha-sig.figma.com/img/bbbc/9651/77ffeff9021e058e642f492eb2ed433b?Expires=1703462400&Signature=YNAPtXm2mHu8LU9zOm4vzPcf46K0GRmX4TbsGuYD1ZFolBTvVp1Q8cyg6pxVbv8zCKWvcsUv8zWUNMHsSC1TMKeoJ8sqNH4JOnGl6ElQciYN2uLURNf6ajFgOvmkXz1ci8UNGjuno9qNiYOp8NjGdYhSuWIWatm~RnRGZVtZW9UkEydp~dinc2PNoel~gxLuDXrGldQi4a7PSNsmfFNt9G70s-X6h6OOTg1xca5ZtlHvT3oIC3PSGqybA0ZkYw8FzrDAZt8l1YD78rd7RbvVmrcSiASMPKm~qWYYzWJWAwhikjackIamHnALNFTjNSX3xf7y1frszqfnue49H2GBHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
      ]
    ),
  ];

  getContest() {
    return this.weeklyContest.slice();
  }
}
