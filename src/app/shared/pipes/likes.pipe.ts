import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'likes'
})
export class LikesPipe implements PipeTransform {

  transform(value: number): string {
    if (value < 1000) {
      return `👍 ${value}`;
    }

    if (value < 1_000_000) {
      return `👍 ${this.format(value / 1000)}K`;
    }

    return `👍 ${this.format(value / 1_000_000)}M`;
  }

  private format(value: number): string {
    return Number.isInteger(value)
      ? value.toString()
      : value.toFixed(1);
  }

}
