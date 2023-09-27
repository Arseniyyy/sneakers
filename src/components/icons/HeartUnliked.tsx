import { IIconProps } from 'types/icons'

const HeartUnliked = ({ className, width, height }: IIconProps) => {
  return <svg className={className} width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="31" height="31" rx="6.5" fill="white" stroke="#F8F8F8"/>
    <path d="M21.149 11.356L21.1484 11.3554C20.8095 11.0258 20.4097 10.7636 19.9705 10.5833L19.9696 10.5829C19.5139 10.3951 19.0249 10.2989 18.5311 10.3L18.5295 10.3C17.8346 10.3 17.1584 10.4887 16.5717 10.8438L16.5717 10.8439C16.4313 10.9288 16.2985 11.0218 16.173 11.1228L15.7341 11.476L15.2953 11.1228C15.1698 11.0218 15.037 10.9288 14.8966 10.8439L14.8966 10.8438C14.3099 10.4887 13.6337 10.3 12.9388 10.3C12.4373 10.3 11.9546 10.395 11.4987 10.5829L11.498 10.5832C11.057 10.7644 10.6606 11.0243 10.3197 11.3556L10.3187 11.3566L10.3187 11.3566C9.98111 11.6834 9.71174 12.0725 9.52557 12.5016L21.149 11.356ZM21.149 11.356C21.4865 11.6835 21.7561 12.0729 21.943 12.5022C22.1365 12.9487 22.2347 13.4204 22.2333 13.9064V13.9084C22.2333 14.3625 22.1399 14.8512 21.9418 15.3651L21.9412 15.3667M21.149 11.356L21.9412 15.3667M12.3799 19.1131L12.38 19.1132C13.1291 19.7996 13.8773 20.3822 14.4475 20.7988C14.732 21.0066 14.9709 21.1721 15.1415 21.2873C15.2268 21.345 15.2948 21.3899 15.3428 21.4212C15.3857 21.4492 15.4091 21.464 15.4144 21.4673C15.4154 21.4679 15.4158 21.4682 15.4155 21.468L15.4266 21.4748L15.4266 21.4749L15.7333 21.6701L16.0401 21.4749L16.0402 21.4748C16.0914 21.4423 17.5822 20.4902 19.0868 19.1131H12.3799ZM12.3799 19.1131C11.4753 18.2845 10.7634 17.4818 10.255 16.7299M12.3799 19.1131L10.255 16.7299M21.9412 15.3667C21.7771 15.7954 21.5328 16.2542 21.2114 16.7303M21.9412 15.3667L21.2114 16.7303M10.255 16.7299C9.93467 16.2553 9.69124 15.796 9.52486 15.3651L10.255 16.7299ZM21.2114 16.7303C20.7031 17.482 19.9913 18.2845 19.087 19.1129L21.2114 16.7303ZM9.23333 13.9084C9.23333 13.4208 9.33184 12.9483 9.52554 12.5017L9.52472 15.3648C9.32672 14.851 9.23333 14.3624 9.23333 13.9084Z" stroke="#ECECEC" strokeWidth="1.4"/>
  </svg>
}

export default HeartUnliked
