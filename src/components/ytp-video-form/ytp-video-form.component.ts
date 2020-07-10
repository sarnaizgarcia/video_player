import { Component, Output, EventEmitter } from '@angular/core';

import { ytpFormData } from './ytp-video-form-types';

@Component({
  selector: 'ytp-video-form',
  templateUrl: './ytp-video-form.component.html',
  styleUrls: ['./ytp-video-form.component.css']
})
export class YtpVideoFormComponent {

  public tagNameValidationError = '';
  public videoUrlValidationError = '';
  public formDisabled = true;

  public tagName = ''
  public videoUrl = ''

  private isTagNameDirty = false;
  private isVideoUrlDirty = false;

  @Output()
  public onSubmitVideo: EventEmitter<ytpFormData> = new EventEmitter<ytpFormData>();


  private validateTagName(): boolean {
    return this.tagName != '';
  }

  private validateVideoURL(): boolean {
    const validateURL = /^^https:\/\/www\.youtube\.com.*/i;

    return validateURL.test(this.videoUrl);
  }

  private enableForm() {
    this.formDisabled = !(this.validateTagName() && this.validateVideoURL());
  }

  public onFocusTagName() {
    this.isTagNameDirty = true;
  }

  public onFocusVideoUrl() {
    this.isVideoUrlDirty = true;
  }

  public onChangeTagName() {
    if (this.isTagNameDirty) {
      this.tagNameValidationError = (this.validateTagName())
      ? '' : 'A valid youtube url should be provided'

      this.enableForm();
    }
  }

  public onChangeVideoURL() {
    if (this.isVideoUrlDirty) {
      this.videoUrlValidationError = (this.validateVideoURL())
      ? '' : 'A valid youtube url should be provided'

      this.enableForm();
    }
  }

  public submitAction() {
    if (!this.formDisabled) {
      this.onSubmitVideo.emit({
        tagName: this.tagName,
        videUrl: this.videoUrl,
      });
    }
  }
}
