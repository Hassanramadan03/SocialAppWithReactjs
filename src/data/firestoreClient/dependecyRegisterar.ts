import { GraphService } from 'data/firestoreClient/services/graphs/GraphService'
import { IGraphService } from 'data/firestoreClient/services/graphs/IGraphService'
import { VoteService } from 'data/firestoreClient/services/votes/VoteService'
import { PostService } from 'data/firestoreClient/services/posts/PostService'
import { StorageService } from 'data/firestoreClient/services/files/StorageService'
import { CommonService } from 'data/firestoreClient/services/common/CommonService'
import { CommentService } from 'data/firestoreClient/services/comments/CommentService'
import { ICircleService } from 'core/services/circles/ICircleService'
import { Container } from 'inversify'
import { IUserService } from 'core/services/users'
import { SocialProviderTypes } from 'core/socialProviderTypes'
import { UserService } from 'data/firestoreClient/services/users/UserService'
import { IAuthorizeService } from 'core/services/authorize'
import { AuthorizeService } from 'data/firestoreClient/services/authorize/AuthorizeService'
import { CircleService } from 'data/firestoreClient/services/circles/CircleService'
import { ICommentService } from 'core/services/comments'
import { ICommonService } from 'core/services/common'
import { IStorageService } from 'core/services/files'
import { IImageGalleryService } from 'core/services/imageGallery'
import { INotificationService } from 'core/services/notifications'
import { IPostService } from 'core/services/posts'
import { IVoteService } from 'core/services/votes'
import { ImageGalleryService } from 'data/firestoreClient/services/imageGallery/ImageGalleryService'
import { NotificationService } from 'data/firestoreClient/services/notifications'
import { FirestoreClientTypes } from 'data/firestoreClient/firestoreClientTypes'
import { IUserTieService } from 'core/services/circles'
import { UserTieService } from 'data/firestoreClient/services/circles/UserTieService'

/**
 * Register firestore client dependecies
 * @param container DI container
 */
export const useFirestore = (container: Container) => {
  container.bind<IAuthorizeService>(SocialProviderTypes.AuthorizeService).to(AuthorizeService)
  container.bind<ICircleService>(SocialProviderTypes.CircleService).to(CircleService)
  container.bind<ICommentService>(SocialProviderTypes.CommentService).to(CommentService)
  container.bind<ICommonService>(SocialProviderTypes.CommonService).to(CommonService)
  container.bind<IStorageService>(SocialProviderTypes.StorageService).to(StorageService)
  container.bind<IImageGalleryService>(SocialProviderTypes.ImageGalleryService).to(ImageGalleryService)
  container.bind<INotificationService>(SocialProviderTypes.NotificationService).to(NotificationService)
  container.bind<IPostService>(SocialProviderTypes.PostService).to(PostService)
  container.bind<IUserService>(SocialProviderTypes.UserService).to(UserService)
  container.bind<IVoteService>(SocialProviderTypes.VoteService).to(VoteService)
  container.bind<IGraphService>(FirestoreClientTypes.GraphService).to(GraphService)
  container.bind<IUserTieService>(SocialProviderTypes.UserTieService).to(UserTieService)

}
